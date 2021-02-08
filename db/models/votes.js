'use strict';
module.exports = (sequelize, DataTypes) => {
  const Votes = sequelize.define('Votes', {
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    votes: DataTypes.INTEGER
  }, {});
  Votes.associate = function(models) {
    // associations can be defined here
  };
  return Votes;
};