const express = require("express");
const busRoutes = require("./bus-routes");

const router = express.Router();

console.log("3.-----from routes/v1/index.js");

router.use("/bus", busRoutes);

module.exports = router;
