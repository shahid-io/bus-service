const { BusWithRoutes } = require("../repositories");

const busWithRoutes = new BusWithRoutes();

/**
 *
 * @returns {Bus with Routes}
 */
async function getBusWithRoutes() {
  try {
    const data = await busWithRoutes.getBusWithRoutes();
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getBusWithRoutes,
};
