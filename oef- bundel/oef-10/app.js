//Print de tafel van een gegeven getal:
// Vraag een getal aan de gebruiker en gebruik een for-loop om de tafel van dat getal te printen


// Vraag een getal aan de gebruiker
let getal = parseInt(prompt("Voer een getal in:"));

// Gebruik een for-loop om de tafel te printen
for (let i = 1; i <= 10; i++) {
    console.log(i + " x " + getal + " = " + (i * getal));
}

//i zal telkens met 1+ verhogen. Het getal van de gebruiker zal altijd hetzelfde blijven