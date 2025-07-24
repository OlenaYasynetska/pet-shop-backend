const express = require("express");
const cors = require("cors");

const categories = require("./routes/categories");
const sale = require("./routes/sale");
const order = require("./routes/order");
const products = require("./routes/products");

const PORT = 3333;

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/categories", categories);
app.use("/products", products);
app.use("/sale", sale);
app.use("/order", order);

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`\n\nServer started on ${PORT} port...`);
  });
};

module.exports = startServer;
