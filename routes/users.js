var express = require("express");
var router = express.Router();
const db = require("../models");
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
router.get("/", function (req, res, next) {
  res.render("login");
});
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
      res.render("/", {
        title: "Login",
        token: req.csrfToken(),
        errors,
      });
  })
);
router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render("register", { user, token: csrfToken() });
});
//register / signup
router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { first_name, last_name, email, bio, password } = req.body;
    const user = db.User.build({
      first_name,
      last_name,
      email,
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
      res.render("/register", {
        errors,
        title: "Login",
        token: req.csrfToken(),
        user,
      });
    }
  })
);
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
