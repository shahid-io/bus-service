const CrudRepository = require("./crud-repository");
const { Route } = require("../models");

class RouteRepository extends CrudRepository {
  constructor() {
    super(Route);
  }

  async updateRoute(data, routeId) {
    const response = await this.model.update(data, {
      where: { routeId: routeId },
    });
    return response;
  }

  async destroyRoute(routeId) {
    const response = await this.model.destroy({
      where: {
        routeId: routeId,
      },
    });
    return response;
  }
}

module.exports = RouteRepository;
