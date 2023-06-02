const CrudRepository = require("./crud-repository");
const { Route } = require("../models");

class RouteRepository extends CrudRepository {
  constructor() {
    super(Route);
  }
}

module.exports = RouteRepository;
