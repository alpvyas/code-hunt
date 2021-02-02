var express = require("express");
var router = express.Router();
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser, restoreUser, requireAuth } = require("../auth");
const Sequelize = require("sequelize");
const {
  loginValidators,
  userValidators,
  validationResult,
  csrfProtection,
  asyncHandler,
  videoValidators,
} = require("./utils");
const checkPermissions = (video, currentUser) => {
  if (video.userId !== currentUser.id) {
    const err = new Error("Cannot delete other Users' posts.");
    err.status = 403;
    throw err;
  }
};
/* GET home page. */
router.get(
  "/new",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const video = db.Video.build();
    const languages = db.Language.findAll({ order: [["name", "ASC"]] });
    res.render("new-post", {
      title: "New Link",
      video,
      languages,
      token: req.csrfToken(),
    });
  })
);
router.post(
  "/new",
  csrfProtection,
  requireAuth,
  videoValidators,
  asyncHandler(async (req, res) => {
    const languages = db.Language.findAll({ order: [["name", "ASC"]] });
    const { title, description, link, languageId } = req.body;
    const video = db.Video.build({
      title,
      description,
      link,
      languageId,
      userId: req.locals.user.id,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await video.save();
      res.redirect(`/posts/${video.id}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("new-post", {
        title: "New Post",
        video,
        errors,
        token: req.csrfToken(),
        languages,
      });
    }
  })
);
router.get(
  "/:pid",
  requireAuth,
  asyncHandler(async (req, res) => {
    const video = await db.Video.findByPk(req.params.pid);
    res.render("video", { video, title: `${video.title}` });
  })
);
router.delete(
  "/:pid",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const videoId = parseInt(req.params.pid, 10);
    const video = await db.Video.findByPk(videoId);
    checkPermissions(video, res.locals.user);
    await video.destroy();
    res.redirect("/home");
  })
);
//test, if does not pass, change get to put
router.get(
  "/search",
  requireAuth,
  asyncHandler(async (req, res) => {
    const query = req.body;
    let results = await db.Video.findAll({
      where: { title: { [Sequelize.Op.iLike]: `%${query}%` } },
      order: [["updatedAt", "DESC"]],
    });
    if (!results) {
      let language = await db.Language.findOne({
        where: { name: { [Sequelize.Op.iLike]: `%${query}%` } },
      });
      results = await db.Video.findAll({
        where: { languageId: language.id },
      });
    }
    res.render("home", { results, title: "Search Results" });
  })
);

module.exports = router;
