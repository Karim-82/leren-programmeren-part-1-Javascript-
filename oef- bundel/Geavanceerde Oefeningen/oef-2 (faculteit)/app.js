//Bereken de faculteit van een getal:

let number = parseInt(prompt("Voer een getal in:"));
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);

/*
Uitleg: De loop vermenigvuldigt elke waarde van i met de variabele factoriaL,beginnend bij 1.

Voorbeeld:

Als number = 5, dan werkt de loop als volgt:
factorial = 1 × 1 = 1
factorial = 1 × 2 = 2
factorial = 2 × 3 = 6
factorial = 6 × 4 = 24
factorial = 24 × 5 = 120

 */

