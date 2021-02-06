"use strict";

module.exports = {
  up: (queryInterface, Sequelize,
    randomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * 
      (end.getTime() - start.getTime()));
  },) => {
    return queryInterface.bulkInsert("Comments", [
      {
        body: "This is comment 1",
        userId: 7,
        videoId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        body: "This is comment 2",
        userId: 7,
        videoId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        body: "This is comment 3",
        userId: 7,
        videoId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        body: "This is comment 4",
        userId: 7,
        videoId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        body: "This is comment 5",
        userId: 7,
        videoId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
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
