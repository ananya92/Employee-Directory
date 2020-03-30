const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/empDirectory", { useNewUrlParser: true });

const empSeed = [
  {
    name: "Stuart Lakes",
    employeeID: 5671041,
    department: "Information Technology",
    designation: "Software Engineer",
    email: "stuart.lakes@hpe.com",
    phone: 434908338
  },
  {
    name: "Robert Lewis",
    employeeID: 3892201,
    department: "Information Technology",
    designation: "Business Analyst",
    email: "robert.lewis@hpe.com",
    phone: 436889002
  },
  {
    name: "Andrea Johnson",
    employeeID: 3378890,
    department: "Information Technology",
    designation: "Software Engineer",
    email: "andrea.johnson@hpe.com",
    phone: 439209448
  },
  {
    name: "George Morrison",
    employeeID: 3399220,
    department: "Information Technology",
    designation: "Manager",
    email: "george.morrison@hpe.com",
    phone: 448220345
  },
  {
    name: "Stacy Andrews",
    employeeID: 9937728,
    department: "Information Technology",
    designation: "Business Analyst",
    email: "stacy.andrews@hpe.com",
    phone: 478990327
  },
  {
    name: "Mary Jones",
    employeeID: 4456328,
    department: "Information Technology",
    designation: "Software Engineer",
    email: "mary.jones@hpe.com",
    phone: 434908338
  },
  {
    name: "Gregory House",
    employeeID: 5889320,
    department: "Finance",
    designation: "Accountant",
    email: "gregory.house@hpe.com",
    phone: 447338292
  },
  {
    name: "Emily Clark",
    employeeID: 6445389,
    department: "Finance",
    designation: "Accountant",
    email: "emily.clark@hpe.com",
    phone: 443789839
  },
  {
    name: "Wilson Drakes",
    employeeID: 6647338,
    department: "Finance",
    designation: "Manager",
    email: "wilson.drakes@hpe.com",
    phone: 476388679
  },
  {
    name: "Louis Miles",
    employeeID: 5478893,
    department: "Information Technology",
    designation: "Software Engineer",
    email: "louis.miles@hpe.com",
    phone: 448799032
  },
  {
    name: "Preeti Mohan",
    employeeID: 5677489,
    department: "Human Resources",
    designation: "HR Specialist",
    email: "preeti.mohan@hpe.com",
    phone: 447893378
  },
  {
    name: "Warner Segall",
    employeeID: 5567488,
    department: "Human Resources",
    designation: "HR Specialist",
    email: "warner.segall@hpe.com",
    phone: 444678376
  },
  {
    name: "Kristine Hathaway",
    employeeID: 5437822,
    department: "Human Resources",
    designation: "Manager",
    email: "kristine.hathaway@hpe.com",
    phone: 445633278
  },
  {
    name: "Paul Smith",
    employeeID: 5667399,
    department: "Information Technology",
    designation: "Software Engineer",
    email: "paul.smith@hpe.com",
    phone: 452322358
  },
  {
    name: "Brian Walter",
    employeeID: 6645782,
    department: "Information Technology",
    designation: "Business Analyst",
    email: "brian.walter@hpe.com",
    phone: 445633722
  }
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(empSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
