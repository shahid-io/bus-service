const express = require("express");
const { BusRoutesController } = require("../../controllers");
const router = express.Router();

router.get("/", BusRoutesController.getBusWithRoutes);

module.exports = router;
