"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Bus, {
        foreignKey: "routeId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Route.init(
    {
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      routeNumber: {
        type: DataTypes.INTEGER,
      },
      startPoint: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endPoint: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: "00:00:00",
      },
      frequency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Route",
    }
  );
  return Route;
};
