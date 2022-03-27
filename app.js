const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

const routes = require("./routes");
// app.get("/", (req, res) => {
//   res.send("Hello Worldie!");
// });
// global.mazos = {};
app.use(cors());
app.use(express.static("public"));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
