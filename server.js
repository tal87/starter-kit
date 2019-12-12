const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

//create express app
const app = express();

//create middleware to handle the serving of the app
app.use("/", serveStatic(path.join(__dirname, "public")));

// create default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
