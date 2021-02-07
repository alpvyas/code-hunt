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

router.get("/", csrfProtection, async (req, res) => {
  const languages = await db.Language.findAll({ order: [["name", "ASC"]] });
  res.render("login", {
    title: "Login",
    token: req.csrfToken(),
    languages,
  });
});
router.post(
  "/",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res, next) => {
    const validatorErrors = validationResult(req);
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email: email } });
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
        }
      }
      errors.push("Login failed - Invalid Credentials");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render("login", {
      login: true,
      title: "Login",
      errors,
      token: req.csrfToken(),
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
        title: "Register",
        token: req.csrfToken(),
        user,
        registerStatus: true,
      });
    }
  })
);
router.get("/logout", requireAuth, (req, res) => {
  logoutUser(req, res);
  return req.session.save(() => {
    return res.redirect("/");
  });
});
router.get(
  "/home",
  requireAuth,
  asyncHandler(async (req, res) => {
    const languages = await db.Language.findAll({ order: [["name", "ASC"]] });
    const links = await db.Video.findAll({
      order: [["updatedAt", "DESC"]],
      include: "Language",
    });
    const newestLink = await db.Video.findOne({
      order: [["createdAt", "DESC"]],
      include: "Language",
    });
    links.forEach((link) => {
      if (!link.title.includes(" ") && link.title.length > 26) {
        link.title = `${link.title.substring(0, 26)}...`;
      }
    });
    if (!newestLink.title.includes(" ") && newestLink.title.length > 26) {
      newestLink.title = `${newestLink.title.substring(0, 26)}...`;
    }
    res.render("home", { title: "Home", links, languages, newestLink });
  })
);
router.get(
  "/profile",
  requireAuth,
  asyncHandler(async (req, res) => {
    const userId = res.locals.user.id;
    const user = await db.User.findByPk(userId);
    const userLinks = await db.Video.findAll({
      where: { userId },
      include: "Language",
    });
    if (!user.bio.includes(" ") && user.bio.length > 26) {
      user.bio = `${user.bio.substring(0, 26)}...`;
    }
    userLinks.forEach((link) => {
      if (link.title.length > 50) {
        link.title = `${link.title.substring(0, 50)}...`;
      }
    });
    const newestLink = await db.Video.findOne({
      order: [["createdAt", "DESC"]],
      include: "Language",
    });
    const languages = await db.Language.findAll({ order: [["name", "ASC"]] });
    const comments = await db.Comment.findAll({ where: { userId } });
    res.render("profile", {
      user,
      userLinks,
      comments,
      languages,
      newestLink,
      title: `${user.first_name} ${user.last_name}`,
    });
  })
);

module.exports = router;
