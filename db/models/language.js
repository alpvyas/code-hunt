"use strict";
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define(
    "Language",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Language.associate = function (models) {
    Language.hasMany(models.Video, { foreignKey: "languageId" });
  };
  return Language;
};
