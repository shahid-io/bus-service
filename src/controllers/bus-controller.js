const BusService = require("../services");
const StatusCodes = require("http-status-codes");

const createBus = async (req, res) => {
  try {
    const bus = await BusService.createBus(req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully created Bus.",
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
};

module.exports = {
  createBus,
};
