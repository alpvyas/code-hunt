const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const bcrypt = require("bcryptjs");
const {
  loginUser,
  logoutUser,
  restoreUser,
  requireAuth,
} = require("../../auth");
const Sequelize = require("sequelize");
const {
  loginValidators,
  userValidators,
  validationResult,
  csrfProtection,
  asyncHandler,
  videoValidators,
  commentValidators,
} = require("../utils");
const checkPermissions = (comment, currentUser) => {
  if (comment.userId !== currentUser.id) {
    const err = new Error("Cannot delete other Users' comments.");
    err.status = 403;
    throw err;
  }
};

router.post(
  "/posts/:pid/comments",
  requireAuth,
  commentValidators,
  asyncHandler(async (req, res) => {
    const videoId = parseInt(req.params.pid, 10);
    const video = await db.Video.findByPk(videoId);
    const { body } = req.body;
    const comment = db.Comment.build({
      body,
      userId: res.locals.user.id,
      videoId,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await comment.save();
      res.json({ msg: `Comment created` });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
        comment,
        errors,
      });
    }
  })
);
router.post(
  "/posts/:pid/comments/:cid/delete",
  requireAuth,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.cid, 10);
    const comment = await db.Comment.findByPk(commentId);
    checkPermissions(comment, res.locals.user);
    await comment.destroy();
    res.json({ msg: `Deleted comment with id of ${commentId}` });
  })
);

module.exports = router;
