const express = require("express");
const path = require("path");

//create express app
const app = express();

//create middleware to handle the serving of the static files
app.use("/", express.static(path.join(__dirname, "public")));

// any path will take us to index.html
// then react router will take care of the path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/") + "index.html");
});

// create default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
