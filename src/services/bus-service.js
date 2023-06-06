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
    if (bus == null) {
      throw new Error(`Bus isn't available with ${id} isn't present`);
    }
    return bus;
  } catch (error) {
    throw error;
  }
}

async function destroyBus(id) {
  try {
    const bus = await busRepository.destroy(id);
    return bus;
  } catch (error) {
    console.log(error);
  }
}

async function updateBus(data, id) {
  try {
    const bus = await busRepository.update(data, id);
    return bus;
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  createBus,
  getBus,
  getBusById,
  destroyBus,
  updateBus,
};
