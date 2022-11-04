'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Courses', [{
      name: 'Matemáticas',
      hours: 25,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Informática',
      hours: 19,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Sociales',
      hours: 34,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Estadística',
      hours: 11,
      createdAt: new Date,
      updatedAt: new Date
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
