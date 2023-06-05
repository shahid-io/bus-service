const express = require("express");
const { RouteController } = require("../../controllers");
const router = express.Router();

router.post("/", RouteController.createRoute);

router.get("/", RouteController.getAllRoute);

router.get("/:id", RouteController.getRouteById);

module.exports = router;
