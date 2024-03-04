import { Product, taxCalculation } from "./06-functions-destructuring"

const shoppingCart: Product[] = [
    {
        description: "Nokia 1100",
        price: 500.0
    },
    {
        description: "iPad",
        price: 330.0
    }
]


const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.19

})

console.log("Total", total);
console.log("Tax", tax);
