let products = parseInt(prompt("Geef het aantal producten in:"));
let productPrices = parseFloat(prompt("Geef de prijs van het eerste product in:"));

let totalPrice = productPrices * productPrices;
let discount = 0;

if(totalPrice > 100){
    discount = totalPrice * 0.10;
    console.log("U heeft een korting van " + discount + " euro");
    totalPrice = totalPrice - discount;
}
else if(totalPrice >= 50 && totalPrice <= 100){
    discount = totalPrice * 0.05;
    console.log("U heeft een korting van " + discount + " euro");
    totalPrice = totalPrice - discount;
}
else {
    console.log("U hebt geen korting");
    console.log("Het totaal bedrag is: " + totalPrice + " euro");
}
