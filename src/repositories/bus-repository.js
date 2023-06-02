const CrudRepository = require("./crud-repository");
const { Bus } = require("../models");

class BusRepository extends CrudRepository {
  constructor() {
    super(Bus);
    console.log("1.-----from BusRepository");
  }
}

module.exports = BusRepository;
