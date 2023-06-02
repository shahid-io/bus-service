const express = require("express");
const { BusController } = require("../../controllers");
const router = express.Router();

router.post("/", BusController.createBus);
router.get("/", BusController.getAllBus);
router.get("/:id", BusController.getBusById);
router.delete("/:id", BusController.destroyBus);
router.patch("/:id", BusController.updateBus);

module.exports = router;
