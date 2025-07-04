// The Coffee Machine:
    // In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

    async function brewCoffee(coffeeType) {
        let randomDelay = 1 + 5 * Math.random();
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Your ${coffeeType} is ready! (after ${randomDelay.toFixed(2)} seconds)`)
            }, randomDelay*1000);
        })
    }

    async function main() {
        let coffeeType = "Black Coffee"
        console.log("The coffee is currently brewing ...")
        console.log(await brewCoffee(coffeeType));
    }
    main()