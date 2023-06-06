const express = require("express");
const busRoutes = require("./bus-routes");
const routeRoutes = require("./route-routes");
const busWithRoutes = require("./bus-routes-route");
const router = express.Router();

console.log("3.-----from routes/v1/index.js");

router.use("/bus", busRoutes);

router.use("/routes", routeRoutes);
// checking
router.use("/busroutes", busWithRoutes);

module.exports = router;
