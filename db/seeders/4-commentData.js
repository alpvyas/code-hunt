"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        body: "This is comment 1",
        userId: 7,
        videoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: "This is comment 2",
        userId: 7,
        videoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: "This is comment 3",
        userId: 7,
        videoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: "This is comment 4",
        userId: 7,
        videoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: "This is comment 5",
        userId: 7,
        videoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
