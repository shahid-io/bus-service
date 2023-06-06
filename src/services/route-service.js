const { RouteRepository } = require("../repositories");

const routeRepository = new RouteRepository();

async function createRoute(data) {
  try {
    const route = await routeRepository.create(data);
    return route;
  } catch (error) {
    console.log(error);
  }
}

async function getRoute() {
  try {
    const route = await routeRepository.getAll();
    return route;
  } catch (error) {
    console.log(error);
  }
}

async function getRouteById(id) {
  try {
    const route = await routeRepository.get(id);
    return route;
  } catch (error) {
    console.log(error);
  }
}

async function destroyRoute(routeId) {
  try {
    const route = await routeRepository.destroyRoute(routeId);
    return route;
  } catch (error) {
    console.log(error);
  }
}

async function updateRoute(data, routeId) {
  try {
    const route = await routeRepository.updateRoute(data, routeId);
    return route;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createRoute,
  getRoute,
  getRouteById,
  updateRoute,
  destroyRoute,
};
