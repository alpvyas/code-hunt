"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      body: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      videoId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Video, { foreignKey: "videoId" });
  };
  return Comment;
};
