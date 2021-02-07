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
router.get(
  "/posts/:pid/comments",
  requireAuth,
  asyncHandler(async (req, res) => {
    const videoId = parseInt(req.params.pid, 10);
    const comments = await db.Comment.findAll({
      where: { videoId },
      order: [["createdAt", "DESC"]],
      limit: 100,
      include: "User",
    });
    comments.forEach((comment) => {
      if (!comment.body.includes(" ") && comment.body.length > 26) {
        comment.body = `${comment.body.substring(0, 26)}...`;
      }
    });

    res.json({ comments, userId: res.locals.user.id });
  })
);
router.post(
  "/posts/:pid/comments",
  requireAuth,
  commentValidators,
  asyncHandler(async (req, res) => {
    const videoId = parseInt(req.params.pid, 10);
    const { body } = req.body;
    const comment = db.Comment.build({
      body,
      userId: res.locals.user.id,
      videoId,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await comment.save();
      const comments = await db.Comment.findAll({
        where: { videoId },
        order: [["createdAt", "DESC"]],
        limit: 100,
        include: "User",
      });
      comments.forEach((comment) => {
        if (!comment.body.includes(" ") && comment.body.length > 26) {
          comment.body = `${comment.body.substring(0, 26)}...`;
        }
      });
      res.json({ userId: res.locals.user.id, comments });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      const comments = await db.Comment.findAll({
        where: { videoId },
        order: [["createdAt", "DESC"]],
        limit: 100,
        include: "User",
      });
      comments.forEach((comment) => {
        if (!comment.body.includes(" ") && comment.body.length > 26) {
          comment.body = `${comment.body.substring(0, 26)}...`;
        }
      });
      res.json({
        userId: res.locals.user.id,
        comment,
        comments,
        errors,
      });
    }
  })
);
router.delete(
  "/posts/:pid/comments/:cid/delete",
  requireAuth,
  asyncHandler(async (req, res) => {
    const videoId = parseInt(req.params.pid, 10);
    const commentId = parseInt(req.params.cid, 10);
    const comment = await db.Comment.findByPk(commentId);
    checkPermissions(comment, res.locals.user);
    await comment.destroy();
    const comments = await db.Comment.findAll({
      where: { videoId },
      order: [["createdAt", "DESC"]],
      limit: 100,
      include: "User",
    });
    comments.forEach((comment) => {
      if (!comment.body.includes(" ") && comment.body.length > 26) {
        comment.body = `${comment.body.substring(0, 26)}...`;
      }
    });
    res.json({ comments, userId: res.locals.user.id });
  })
);

module.exports = router;
