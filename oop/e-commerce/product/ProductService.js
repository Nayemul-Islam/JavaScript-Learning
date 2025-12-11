// productService.js

const Product = require("./Product.js");

class ProductService {
  constructor() {
    this.products = new Map();
  }

  // Add a new product
  addProduct(productId, name, price, description, stock) {
    const product = new Product(productId, name, price, description, stock);
    this.products.set(productId, product);
  }


  // Get a product by id
  getProduct(productId) {
    return this.products.get(productId) || null;
  }


  // Check if product exists
  hasProduct(productId) {
    return this.products.has(productId);
  }

  // Remove a product
  removeProduct(productId) {
    return this.products.delete(productId);
  }

}

const productService = new ProductService();

module.exports = ProductService;
