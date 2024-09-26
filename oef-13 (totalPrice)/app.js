//Vraag 1: aantal producten invoeren
//Vraag 2: Prijs ingeven per/product
//Variabel total Price (product*prijs)
//Korting op 0 zetten
//conditie + korting toepassen

let producten = parseInt(prompt("Geef het aantal producten in:"));
let productPrijs = parseFloat(prompt("Geef de prijs van het eerste product in:"));

let totaalPrijs = producten * productPrijs;
let korting = 0;

if(totaalPrijs > 100){
    korting = totaalPrijs * 0.10;
    console.log("U heeft een korting van " + korting + " euro");
    totaalPrijs = totaalPrijs - korting;
}
else if(totaalPrijs >= 50 && totaalPrijs <= 100){
    korting = totaalPrijs * 0.05;
    console.log("U heeft een korting van " + korting + " euro");
    totaalPrijs = totaalPrijs - korting;
}
else {
    console.log("U hebt geen korting");
    console.log("Het totaal bedrag is: " + totaalPrijs + " euro");
}

