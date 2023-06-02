const { BusService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createBus(req, res) {
  try {
    // console.log(req.body);
    const bus = await BusService.createBus({
      busNumber: req.body.busNumber,
      busCapacity: req.body.busCapacity,
    });

    /*
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
    // console.log("created"+bus);
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

module.exports = {
  createBus,
  getAllBus,
  getBusById,
};
