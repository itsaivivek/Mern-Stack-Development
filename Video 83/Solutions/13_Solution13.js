// The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let products = [
    { name: "Oven", prices: 4000, quantity: 1 },
    { name: "Fry-Pan", prices: 2500, quantity: 1 },
    { name: "Gas Stove", prices: 5000, quantity: 1 },
    { name: "Fan", prices: 3000, quantity: 3 },
    { name: "Cooler", prices: 10000, quantity: 2 },
    { name: "Grinder", prices: 8000, quantity: 2 },
    { name: "Trimmer", prices: 700, quantity: 3 },
    { name: "Toothpaste", prices: 120, quantity: 6 },
    { name: "BP Machine", prices: 3500, quantity: 1 },
    { name: "Football", prices: 1200, quantity: 1 },
    { name: "Volleyball", prices: 1400, quantity: 1 },
    { name: "Dumb-bells", prices: 3000, quantity: 4 },
    { name: "Fitness Band", prices: 1500, quantity: 2 },
    { name: "HandGripper", prices: 250, quantity: 1 },
    { name: "Watches", prices: 500, quantity: 4 },
    { name: "EyeGlasses", prices: 150, quantity: 5 }
];

function priceMultipliedQuantity(product) {
    return (product.prices * product.quantity)
}

function calculateTotal(products) {
    let sum = 0
    products.forEach(product => {
        let mul = priceMultipliedQuantity(product)
        sum += mul;
    });
    return sum;
}

console.log(`The total cost is $${calculateTotal(products)}`)



// Alternative method
// function calculateTotal(products) {
//     return products.reduce((total, product) => {
//         return total + (product.prices * product.quantity);
//     }, 0);
// }