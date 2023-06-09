'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Column_Transcript', 'idcoursetype', {
      type: Sequelize.UUID,
      field: 'idcoursetype',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Column_Transcript', 'idcoursetype');
  }
};
