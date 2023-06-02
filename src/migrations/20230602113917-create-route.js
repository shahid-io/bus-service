"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Routes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      routeId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      routeNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      startPoint: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endPoint: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      distance: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: "00:00:00",
      },
      frequency: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Routes");
  },
};
