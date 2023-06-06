const { BusRoutesService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const getBusWithRoutes = async (req, res) => {
  try {
    const data = await BusRoutesService.getBusWithRoutes();
    const busesWithRoutes = data.map((bus) => {
      return {
        busId: bus.busId,
        busNumber: bus.busNumber,
        routeId: bus.Route.routeId,
        routeNumber: bus.Route.routeNumber,
        startPoint: bus.Route.startPoint,
        endPoint: bus.Route.endPoint,
        // Other joined data
      };
    });
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched Bus with Routes",
      busesWithRoutes: busesWithRoutes,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Something went wrong fetching Bus with Routes",
      data: data,
      error: {},
    });
  }
};

module.exports = {
  getBusWithRoutes,
};
