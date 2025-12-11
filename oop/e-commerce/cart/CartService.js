const Cart = require("./Cart.js");

class CartService {
  constructor() {
    this.carts = new Map();
  }

  getCart(customerId) {
    if (!this.carts.has(customerId)) {
      this.carts.set(customerId, new Cart(customerId));
    }
    return this.carts.get(customerId);
  }

  addToCart(customerId, productId, qty = 1) {
    const cart = this.getCart(customerId);
    cart.items.push({ productId, qty });
  }
  removeFromCart(customerId, productId) {
    const cart = this.getCart(customerId);
    cart.items = cart.items.filter((item) => item.productId !== productId);
  }
}
module.exports = CartService;
