'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Videos', [{
        title: 'Video 1',
        description: 'Sample description',
        link: 'www.google.com',
        languageId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])},

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Videos', null, {})
  }
};
