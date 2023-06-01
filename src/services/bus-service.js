const { BusRepository } = require("../repositories");

const busRepository = new BusRepository();

const createBus = async (data) => {
  try {
    const bus = await busRepository.create(data);
    return bus;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBus,
};
