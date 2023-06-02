const { BusRepository } = require("../repositories");

const busRepository = new BusRepository();

async function createBus(data) {
  try {
    const bus = await busRepository.create(data);
    return bus;
  } catch (error) {
    console.log(error);
  }
}

async function getBus() {
  try {
    const buses = await busRepository.getAll();
    return buses;
  } catch (error) {
    console.log(error);
  }
}

async function getBusById(id) {
  try {
    const bus = await busRepository.get(id);
    return bus;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createBus, 
  getBus,
  getBusById,
};
