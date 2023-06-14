const coffeeMenu = require("./coffee_data.js");

//Print an array of all the drinks on the menu.
const printName = (coffee) => {
    return coffee.name;
}
console.log(coffeeMenu.map(printName))
//Print an array of drinks that cost 5 and under.
const underFive = (coffee) => {
    return coffee.price <= 5;
}
const coffeeUnderFive = coffeeMenu.filter(underFive);
console.table(coffeeUnderFive);
//Print an array of drinks that are priced at an even number.
coffeeMenu.sort ((coffee) => {
    if (coffee.price % 2===0){
        console.log((coffee.name))
    }
})
//Print the total if you were to order one of every drink.
let totalCost = 0

coffeeMenu.forEach((coffee) => {
    totalCost += coffee.price
})
console.log(totalCost)
//Print an array with all the drinks that are seasonal.
const inSeason = (coffee) => {
    return coffee.seasonal === true;
}
const seasonalCoffee = coffeeMenu.filter(inSeason);
console.table(seasonalCoffee);
//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
coffeeMenu.filter ((coffee, seasonal) => {
    if(coffee.seasonal === true) {
        console.log(`${coffee.name} with imported beans`)
    }
})

coffeeMenu.filter((coffee,seasonal))