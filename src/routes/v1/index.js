const express = require("express");
const busRoutes = require("./bus-routes");
const routeRoutes = require("./route-routes");

const router = express.Router();

console.log("3.-----from routes/v1/index.js");

router.use("/bus", busRoutes);
router.use("/routes", routeRoutes);

module.exports = router;
