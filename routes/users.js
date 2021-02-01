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
  "/login",
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
//register / signup
router.post(
  "/",
  csrfProteciton,
  asyncHandler(async (req, res, next) => {})
);

module.exports = router;
