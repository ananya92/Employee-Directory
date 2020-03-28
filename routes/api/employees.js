const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/employees"
router
  .route("/")
  .get(controller.findAll)

module.exports = router;
