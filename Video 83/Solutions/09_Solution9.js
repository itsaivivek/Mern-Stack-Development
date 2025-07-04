// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(FoodName) {
    let randomDelay = 1 + 4 * Math.random()
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your Order for ${FoodName} Placed Successfully! (after ${randomDelay.toFixed(2)} seconds)`)
        }, randomDelay*1000);
    })    
}

let FoodName = "Pizza"
let promises = placeOrder(FoodName)

async function main() {
    console.log("Please Wait ...")
    console.log(await placeOrder(FoodName))
}
main()

    


