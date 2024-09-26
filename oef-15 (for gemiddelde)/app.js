//Schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10 berekent.
//i
// som
//resultaat
// 1 +2 + 3 + 4 + 5 + 6 + 7 + 8+ 9 + 10 = 55 / 10 = 5.5

let total = 0;
let result = 0;

let eindGetal = parseInt(prompt("eindgetal?"));

for(let i = 1;i<=eindGetal;i++){
    total = total + i;
}

result = total / eindGetal;
console.log(result);