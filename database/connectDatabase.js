const sequelize = require("./database");

const Category = require('./models/category');
const Product = require('./models/product');

module.exports = async()=> {
    await sequelize.authenticate();
    await sequelize.sync();
    Category.hasMany(Product);
}