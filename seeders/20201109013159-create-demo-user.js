'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Administrador',
      email: 'admin@test.com',
      phone: '3002954315',
      password: '$2b$10$XS2nCAii5DBUea9U2Ciyxub/KkP9t9pD34DJbVutRsqEWAWK5Lw.W',
      roleId: 1,
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
