const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function(req, res) {
    db.Employee.find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
