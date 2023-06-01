const express = require("express");
const { BusController } = require("../../controllers");
const router = express.Router();

router.get("/info", (req, res) => {
  return res.status(200).json({ msg: "Ok" });
});

router.post("/bus", BusController.createBus);

module.exports = {router};
