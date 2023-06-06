// const { sequelize } = require("../models");
const { Bus } = require("../models");
const { Route } = require("../models");
class BusWithRoutes {
  constructor(model) {
    this.model = model;
  }

  getBusWithRoutes() {
    const response = Bus.findAll({
      include: [
        {
          model: Route,
          required: true,
        },
      ],
    });
    return response;
  }
}

module.exports = BusWithRoutes;
