"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
      bio: DataTypes.TEXT,
      username: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Video, { foreignKey: "userId" });
  };
  return User;
};
