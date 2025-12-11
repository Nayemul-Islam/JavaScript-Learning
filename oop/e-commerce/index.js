const ProductService = require("./product/ProductService");
const Customer = require("./users/Customer");
const CartService = require("./cart/CartService");

//Create services
const productService = new ProductService();
const cartService = new CartService();

// Create a customer
const customer = new Customer(1, "Nayem", "nayem@gmail.com", "12345");


// Add some products
productService.addProduct(101, "Laptop", 800, "Powerful laptop", 5);
productService.addProduct(102, "Headphone", 50, "Nice sound", 20);
productService.addProduct(103, "JS Ebook", 20, "Learn JS fast", 100);


// Customer adds products to cart
cartService.addToCart(customer.id, 101, 1);
cartService.addToCart(customer.id, 103, 2);


// Show cart
const cart = cartService.getCart(customer.id);
console.log("Cart:", cart);
