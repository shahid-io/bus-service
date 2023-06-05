"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Route, {
        foreignKey: "routeId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Bus.init(
    {
      busNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Volvo",
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      fuelType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Diesel",
      },
      registrationNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      licensePlate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      busType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "standard",
      },
    },
    {
      sequelize,
      modelName: "Bus",
    }
  );
  return Bus;
};
