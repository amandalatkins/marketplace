const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  sku: String,
  price: String,
  shortDesc: String,
  longDesc: String,
  image: String,
  rating: String,
  categories: String,
  quantity: Number,
  post_date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
