
export interface Product {
    description: String;
    price: number;
}



// const phone: Product = {
//     description: "Nokia 1100",
//     price: 100.0
// }

// const table: Product = {
//     description: "iPad Air",
//     price: 300.0
// }

 interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });
    return [total, total * tax]
}


// const shoppingCart = [phone, table];
// const tax = 0.19;



// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// })    

// console.log("Total", total);
// console.log("Total", taxTotal);











export {}