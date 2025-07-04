// The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.


function filterProducts(products, catagoryName) {
    let filteredProducts = products.filter(product => product.catagory == catagoryName);
    return filteredProducts.length ? filteredProducts : "0 Products";
}

let products = [
    { name: "Oven", catagory: "Home Appliances"},
    { name: "Fry-Pan", catagory: "Home Appliances"},
    { name: "Gas Stove", catagory: "Home Appliances"},
    { name: "Fan", catagory: "Home Appliances"},
    { name: "Cooler", catagory: "Home Appliances"},
    { name: "Grinder", catagory: "Home Appliances"},
    { name: "Trimmer", catagory: "Health"},
    { name: "Toothpaste", catagory: "Health"},
    { name: "BP Machine", catagory: "Health"},
    { name: "Football", catagory: "Fitness"},
    { name: "Volleyball", catagory: "Fitness"},
    { name: "Dumb-bells", catagory: "Fitness"},
    { name: "Fitness Band", catagory: "Fitness"},
    { name: "HandGripper", catagory: "Fitness"},
    { name: "Watches", catagory: "Fashion"},
    { name: "EyeGlasses", catagory: "Fashion"}
];

let catagoryName = "Fitness"
console.log(filterProducts(products, catagoryName));

