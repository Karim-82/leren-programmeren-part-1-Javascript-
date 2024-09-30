//Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van de getallen van 1 tot n


let n = parseInt(prompt("Geef een getal in:"))
let som = 0;

for(let i=1; i<= n ;i= i++ ){
    som = som +i;
    console.log(som);
}

/*

let i = 1: De loop begint bij i = 1, omdat we de getallen vanaf 1 willen optellen.
i <= n: De loop gaat door totdat i groter is dan n, het door de gebruiker ingevoerde getal.
De loop stopt zodra i groter wordt dan n.
sum = sum + i;: Bij elke iteratie van de loop wordt de huidige waarde van i opgeteld bij sum.
Dus de som van alle getallen van 1 tot en met n wordt opgebouwd in sum.
console.log(sum);:

Wanneer de loop is voltooid, wordt de berekende som van de getallen van 1 tot en met n in de console afgedrukt.

Voorbeeld:

Als de gebruiker bijvoorbeeld n = 5 invoert:

Eerste iteratie: sum = 0 + 1 = 1
Tweede iteratie: sum = 1 + 2 = 3
Derde iteratie: sum = 3 + 3 = 6
Vierde iteratie: sum = 6 + 4 = 10
Vijfde iteratie: sum = 10 + 5 = 15

 */