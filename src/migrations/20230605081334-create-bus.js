'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      busNumber: {
        type: Sequelize.STRING
      },
      routeId: {
        type: Sequelize.INTEGER
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      fuelType: {
        type: Sequelize.STRING
      },
      registrationNumber: {
        type: Sequelize.INTEGER
      },
      licensePlate: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      busType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buses');
  }
};