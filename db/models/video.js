"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      link: DataTypes.STRING,
      languageId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Video.associate = function (models) {
    Video.hasMany(models.Comment, { foreignKey: "videoId" });
    Video.belongsTo(models.User, { foreignKey: "userId" });
    Video.belongsTo(models.Language, { foreignKey: "languageId" });
  };
  return Video;
};
