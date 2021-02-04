"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Languages",
      [
        {
          name: "Python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C++",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Java",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "FORTRAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C#",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swift",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HTML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSS",
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
