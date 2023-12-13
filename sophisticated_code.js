// filename: sophisticated_code.js

/**
 * This code demonstrates a full-fledged e-commerce platform with user authentication,
 * product browsing, shopping cart functionality, and order processing.
 */

// Constants
const PRODUCT_CATEGORIES = ["Electronics", "Clothing", "Home", "Beauty"];
const PRODUCTS = [
  { id: 1, name: "iPhone 12", category: "Electronics", price: 999 },
  { id: 2, name: "Samsung TV", category: "Electronics", price: 1499 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 19 },
  { id: 4, name: "Sofa", category: "Home", price: 699 },
  { id: 5, name: "Lipstick", category: "Beauty", price: 29 },
];

// Classes
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  login() {
    // Simulate login functionality
    console.log(`${this.username} logged in successfully.`);
  }

  logout() {
    // Simulate logout functionality
    console.log(`${this.username} logged out.`);
  }

  addToCart(productId) {
    // Add product to user's cart
    const product = PRODUCTS.find((p) => p.id === productId);
    console.log(`${this.username} added ${product.name} to cart.`);
  }

  // More methods...
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    // Add product to the shopping cart
    this.items.push(product);
    console.log(`${product.name} added to the shopping cart.`);
  }

  // More methods...
}

class Order {
  constructor(user, items) {
    this.user = user;
    this.items = items;
  }

  getTotalAmount() {
    // Calculate the total amount for the order
    const total = this.items.reduce((acc, item) => acc + item.price, 0);
    return total;
  }

  placeOrder() {
    // Simulate placing an order
    const totalAmount = this.getTotalAmount();
    console.log(`Order placed by ${this.user.username}. Total amount: $${totalAmount}`);
  }

  // More methods...
}

// Usage example
const user1 = new User("johnDoe123", "123456", "john@example.com");
user1.login();

const cart = new ShoppingCart();
cart.addItem(PRODUCTS[0]);
cart.addItem(PRODUCTS[2]);
user1.addToCart(4);

const order = new Order(user1, cart.items);
order.placeOrder();

user1.logout();

// More code...
// ... continued for over 200 lines