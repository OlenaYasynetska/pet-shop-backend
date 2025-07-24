const sequelize = require("../database/database");

module.exports = sortBy => {
    const order = [];
    if(sortBy === "default") {
      order.push(["id", "ASC"]);
      return order;
    }
    if(sortBy === "newest") {
        order.push(['updatedAt', 'DESC']);
        return order;
    }
    if(sortBy === "priceLow") {
        order.push([sequelize.literal('COALESCE(discount_price, price)'), 'ASC']);
        return order;
    }
    if(sortBy === "priceHigh") {
        order.push([sequelize.literal('COALESCE(discont_price, price)'), 'DESC']);
        return order;
    }
}