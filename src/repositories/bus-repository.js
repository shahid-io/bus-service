const { CrudRepository } = require("./crud-repository");

class BusRepository extends CrudRepository {
  constructor() {
    super(Bus);
  }
}

module.exports = BusRepository;
