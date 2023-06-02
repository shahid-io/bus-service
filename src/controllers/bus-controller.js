const { BusService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createBus(req, res) {
  try {
    const bus = await BusService.createBus({
      busNumber: req.body.busNumber,
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      capacity: req.body.capacity,
      fuelType: req.body.fuelType,
      registrationNumber: req.body.registrationNumber,
      licensePlate: req.body.licensePlate,
      color: req.body.color,
      busType: req.body.busType,
    });
    /*
    {
      busNumber: req.body.busNumber,
      busCapacity: req.body.busCapacity,
    }
    {
      busNumber: req.body.busNumber,
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      capacity: req.body.capacity,
      fuelType: req.body.fuelType,
      registrationNumber: req.body.registrationNumber,
      licensePlate: req.body.licensePlate,
      color: req.body.color,
      busType: req.body.busType,
    }
    */
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully created a Bus",
      data: bus,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating Bus.",
      data: {},
      error: error,
    });
  }
}

const getAllBus = async (req, res) => {
  try {
    const buses = await BusService.getBus();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all Bus.",
      data: buses,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching Buses.",
      data: {},
      error: error,
    });
  }
};

const getBusById = async (req, res) => {
  try {
    const bus = await BusService.getBusById(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully fetched Bus by id ${req.params.id}`,
      data: bus,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while fetching Bus by id : ${req.params.id}`,
      data: {},
      error: error,
    });
  }
};

const destroyBus = async (req, res) => {
  try {
    const deletedBus = await BusService.getBusById(req.params.id);
    const bus = await BusService.destroyBus(req.params.id);

    if (bus !== null) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: `Successfully DELETED Bus by id ${req.params.id}`,
        data: deletedBus,
        count: bus,
        error: {},
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while deleting Bus by id : ${req.params.id}`,
      data: {},
      error: error,
    });
  }
};

const updateBus = async (req, res) => {
  try {
    const bus = await BusService.updateBus(req.body, req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully UPDATED Bus by id ${req.params.id}`,
      count: bus,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while updating Bus by id : ${req.params.id}`,
      data: {},
      error: error,
    });
  }
};

module.exports = {
  createBus,
  getAllBus,
  getBusById,
  destroyBus,
  updateBus,
};
