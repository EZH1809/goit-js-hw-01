'use strict';
//VAR1
// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     console.log(`Shipping to ${country} will cost ${totalPrice} credits`)
// }
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));




//VAR2
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return`Shipping to ${country} will cost ${totalPrice} credits`
}
let message = getShippingMessage("Australia", 120, 50);
console.log(message);
message = getShippingMessage("Germany", 80, 20);
console.log(message);
message = getShippingMessage("Sweden", 100, 20);
console.log(message);