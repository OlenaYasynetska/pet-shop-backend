const sortList = ["default", "newest", "priceLow", "priceHigh"];

const parseSortParams = (req, res, next) => {
  const { sortBy } = req.query;

  const parsedSortBy = sortList.includes(sortBy) ? sortBy : sortList[0];

  req.query.sortBy = parsedSortBy;

  next();
};

module.exports = parseSortParams;
