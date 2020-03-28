const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
  name: { type: String, required: true },
  employeeID: { type: Number, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true }
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;
