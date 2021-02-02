const express = require("express");
const router = express.Router();
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser, restoreUser, requireAuth } = require("../auth");
const {
  loginValidators,
  userValidators,
  validationResult,
  csrfProtection,
  asyncHandler,
} = require("./utils");

/* GET users listing. */
router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = { first_name: '', last_name: '', email: '', username: '', bio: '' };
    res.render("login", {
      title: "Login",
      user,
      token: req.csrfToken(),
    });
  })
);
//log user in
router.post(
  "/",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res, next) => {
    const errors = [];
    const validatorErrors = validationResult(req);
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (validatorErrors.isEmpty()) {
      if (user) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );
        if (passwordMatch) {
          loginUser(req, res, user);
          return req.session.save(() => {
            return res.redirect("/home");
          });
        } else {
          errors.push("Login failed - Invalid Credentials");
        }
      } else {
        errors.push("Login failed - Invalid Credentials");
        errors = validatorErrors.array().map((error) => error.msg);
      }
    } else
      res.render("login", {
        title: "Login",
        token: req.csrfToken(),
        errors,
      });
  })
);

router.post(
  "/demo",
  asyncHandler(async (req, res, next) => {
    const email = "demo@demo.com";
    const user = await db.User.findOne({ where: { email } });
    loginUser(req, res, user);
    return req.session.save(() => {
      return res.redirect("/home");
    });
  })
);

router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render("login", { user, token: req.csrfToken() });
});

// register / signup
router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { first_name, last_name, email, username, bio, password } = req.body;
    const user = db.User.build({
      first_name,
      last_name,
      email,
      username,
      bio,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 8);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      return req.session.save(() => {
        return res.redirect("/home");
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("login", {
        errors,
        title: "Login",
        user,
        token: req.csrfToken(),
      });
    }
  })
);
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});
router.get(
  "/home",
  requireAuth,
  asyncHandler(async (req, res) => {
    const links = await db.Video.findAll({ order: [["updatedAt", "DESC"]] });
    res.render("home", { title: "Home", links });
  })
);
router.get(
  "/profile",
  requireAuth,
  asyncHandler(async (req, res) => {
    let userId = req.locals.user.id;
    const user = await db.User.findByPk(userId);
    const userLinks = await db.Video.findAll({
      where: { userId },
    });
    const comments = await db.Comment.findAll({ where: { userId } });
    res.render("profile", {
      user,
      userLinks,
      comments,
      title: `${user.first_name} ${user.last_name}`,
    });
  })
);

module.exports = router;
