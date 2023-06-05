"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Buses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      busNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      routeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Volvo"
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "V222",
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      fuelType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Diesel",
      },
      registrationNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      licensePlate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      busType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "standard",
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
    await queryInterface.dropTable("Buses");
  },
};
