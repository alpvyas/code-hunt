"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Languages",
      [
        {
          name: "test language",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Languages", null, {});
  },
};
