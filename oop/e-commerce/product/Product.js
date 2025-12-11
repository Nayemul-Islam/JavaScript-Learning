class Product {
  #productId;
  #name;
  #price;
  #description;
  #stock;

  constructor(productId, name, price, description, stock) {
    this.#productId = productId;
    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#stock = stock;
  }
  get productId() {
    return this.#productId;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get description() {
    return this.#description;
  }
  get stock() {
    return this.#stock;
  }
  set stock(newStock) {
    this.#stock = newStock;
  }
  set price(newPrice) {
    this.#price = newPrice;
  }
  set description(newDescription) {
    this.#description = newDescription;
  }
  set name(newName) {
    this.#name = newName;
  }
 
}
// const product = new Product(101, "Laptop", 800, "Powerful laptop", 5);
// console.log(product.name);
module.exports = Product;
