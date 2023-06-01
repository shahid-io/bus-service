const express = require("express");
const { PORT } = require("./config");

const app = express();

app.listen(PORT, () => {
  console.log(`server serving on port : ${PORT}\nhttp://localhost:3000`);
});
