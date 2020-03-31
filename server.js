const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("employee_directory/build"));
}
// Add routes
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/empDirectory");

// Start the API server
app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}!`);
});
