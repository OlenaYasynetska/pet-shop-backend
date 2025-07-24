const Category = require("../database/models/category");
const Product = require("../database/models/product");

const parsePaginationParams = require("../middlewares/parsePaginationParams");
const parseSortParams = require("../middlewares/parseSortParams");
const isValidId = require("../middlewares/isValidId");

const createSort = require("../utils/createSort");

const express = require("express");

const router = express.Router();

router.get("/", parsePaginationParams, async (req, res) => {
  const { page, perPage, sortBy } = req.query;

  const all = await Category.findAll({
    limit: perPage,
    offset: (page - 1) * perPage,
  });

  res.json(all);
});

router.get("/popular", async (req, res) => {
  const result = await Category.findAll({
    limit: 4,
  });
  res.json(result);
});

router.get("/:id", isValidId, parseSortParams, async (req, res) => {
  const { id } = req.params;

  const order = createSort(req.query.sortBy);

  const all = await Product.findAll({ 
    where: { categoryId: +id },
    order,
  });
  
  const category = await Category.findOne({ where: { id: +id } });

  res.json({
    category,
    data: all,
  });
});

module.exports = router;
