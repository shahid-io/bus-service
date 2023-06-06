const express = require("express");
const { RouteController } = require("../../controllers");
const router = express.Router();

router.post("/", RouteController.createRoute);

router.get("/", RouteController.getAllRoute);

router.get("/:routeId", RouteController.getRouteById);

router.patch("/:routeId", RouteController.updateRoute);

router.delete("/:routeId", RouteController.destroyRoute);

module.exports = router;
