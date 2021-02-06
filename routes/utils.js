const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const userValidators = [
  check("first_name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a First Name")
    .isLength({ max: 20 })
    .withMessage("First Name must be less than 20 characters in length"),
  check("last_name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Last Name")
    .isLength({ max: 20 })
    .withMessage("Last Name must be less than 20 characters in length"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an Email")
    .isLength({ max: 255 })
    .withMessage("Email must be less than 255 characters in length")
    .isEmail()
    .withMessage("Email is invalid")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("The provided Email is already in use");
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Password")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters in length")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your Password")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters in length")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  check("bio")
    .exists({ checkfalsy: true })
    .withMessage("Please enter a short Bio")
    .isLength({ max: 5000 })
    .withMessage("Bio must be less than 5000 characters in length"),
];
const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an Email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Password"),
];
const videoValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a title")
    .isLength({ max: 150 })
    .withMessage("Title must be less than 150 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a short description"),
  check("link")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Video Link")
    .isLength({ max: 150 })
    .withMessage("Link must be less than 150 characters"),
  check("languageId").exists({ checkFalsy: true }),
];
const commentValidators = [
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a comment")
    .isLength({ max: 255 })
    .withMessage("Comment must be less than 255 characters"),
];
module.exports = {
  csrfProtection,
  asyncHandler,
  loginValidators,
  userValidators,
  validationResult,
  check,
  videoValidators,
  commentValidators,
};
