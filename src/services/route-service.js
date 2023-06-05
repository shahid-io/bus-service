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

module.exports = {
  createRoute,
  getRoute,
  getRouteById,
};
