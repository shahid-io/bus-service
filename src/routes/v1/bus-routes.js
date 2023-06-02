const express = require("express");
const { BusController } = require("../../controllers");
const router = express.Router();

router.post("/", BusController.createBus);
router.get("/", BusController.getAllBus);
router.get("/:id", BusController.getBusById);
module.exports = router;
