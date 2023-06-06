const { RouteService } = require("../services");
const { StatusCodes } = require("http-status-codes");
//create route
async function createRoute(req, res) {
  try {
    const route = await RouteService.createRoute({
      routeId: req.body.routeId,
      routeNumber: req.body.routeNumber,
      startPoint: req.body.startPoint,
      endPoint: req.body.endPoint,
      distance: req.body.distance,
      duration: req.body.duration,
      frequency: req.body.frequency,
    });
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully created a Route",
      data: route,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating Route.",
      data: {},
      error: error,
    });
  }
}

async function getAllRoute(req, res) {
  try {
    const routes = await RouteService.getRoute();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all Route.",
      data: routes,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching Routes.",
      data: {},
      error: error,
    });
  }
}

async function getRouteById(req, res) {
  try {
    const route = await RouteService.getRouteById(req.params.routeId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully fetched Route with id : ${req.params.routeId}`,
      data: route,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while fetching route with id : ${req.params.routeId}`,
      data: {},
      error: error,
    });
  }
}

const updateRoute = async (req, res) => {
  try {
    const route = await RouteService.updateRoute(req.body, req.params.routeId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully UPDATED Route by id ${req.params.routeId}`,
      count: route,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while updating Route by id : ${req.params.routeId}`,
      data: {},
      error: error,
    });
  }
};

const destroyRoute = async (req, res) => {
  try {
    const deletedRoute = await RouteService.getRouteById(req.params.routeId);
    const bus = await RouteService.destroyRoute(req.params.routeId);

    if (bus !== null) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: `Successfully DELETED Route by id ${req.params.routeId}`,
        data: deletedRoute,
        count: bus,
        error: {},
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Something went wrong while deleting Route by id : ${req.params.routeId}`,
      data: {},
      error: error,
    });
  }
};

module.exports = {
  createRoute,
  getAllRoute,
  getRouteById,
  updateRoute,
  destroyRoute,
};
