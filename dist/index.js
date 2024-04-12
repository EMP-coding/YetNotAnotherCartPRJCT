"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function creatUser(name, age) {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return newUser;
}
;
function createItem(name, price, description) {
    const newItem = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return newItem;
}
function addToCart(user, item) {
    user.cart.push(item);
}
;
function removeFromCart(user, item) {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
}
function removeQuantityFromCart(user, item, quantity) {
    let toRemove = quantity;
    user.cart = user.cart.filter(cartItem => {
        if (cartItem.id === item.id && toRemove > 0) {
            toRemove--;
            return false;
        }
        else
            return true;
    });
}
// Could use foreach() but I feel like writing it out in a for loop helps me visualize how 
// the code works while I am learning 
function cartTotal(user) {
    let total = 0;
    for (let i = 0; i < user.cart.length; i++) {
        total += user.cart[i].price;
    }
    return total;
}
function printCart(user) {
    console.log(`${user.name}'s Cart:\n${'='.repeat(50)}`);
    if (user.cart.length == 0) {
        console.log('Your Cart is empty 😢');
    }
    else {
        for (let i = 0; i < user.cart.length; i++) {
            console.log(`Item: ${user.cart[i].name} || Price: $${user.cart[i].price}`);
        }
    }
    console.log(`${'='.repeat(50)}\nTotal: $${cartTotal(user).toFixed(2)}\n${'='.repeat(50)}`);
}
// Driver Code
const user1 = creatUser("EMP.coding", 26);
const apple = createItem("Honeycrisp Apple", 0.65, "Exceptionally crisp and juicy");
const bread = createItem("Bread", 2.99, "Multigrain Bread");
const chips = createItem("Chips", 3.99, "Bag of Doritos");
console.log('Task: Add Item A to the users Cart');
addToCart(user1, chips);
printCart(user1);
console.log(`\n\n`);
console.log('Task: Add 3 Item B to the users Cart');
addToCart(user1, bread);
addToCart(user1, bread);
addToCart(user1, bread);
printCart(user1);
console.log(`\n\n`);
console.log('Task: Add 3 Item c to the users Cart');
addToCart(user1, apple);
addToCart(user1, apple);
addToCart(user1, apple);
printCart(user1);
console.log(`\n\n`);
console.log('Task: Use your remove (not remove by Quantity function) to remove all of Item B from your cart');
removeFromCart(user1, bread);
printCart(user1);
console.log(`\n\n`);
console.log("Task: Use your remove Quantity function to remove 2 of Item C from the user's cart");
removeQuantityFromCart(user1, apple, 2);
printCart(user1);