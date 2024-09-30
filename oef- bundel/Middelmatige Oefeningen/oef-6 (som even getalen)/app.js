// Som van de even getallen: Gebruik een for-loop om de som van de even getallen van 1
// tot 100 te berekenen

let som = 0;

for (let i = 1; i <= 100; i++) {
    // Controleer of het getal even is
    if (i % 2 === 0) {
        // Voeg het even getal toe aan de som
        som += i;
    }
}
console.log(som);


//De code kan ook op deze manier geschreven worden (oplossing Tom):

/*
let sum = 0;

for (let i = 2; i <= 100; i+=2) {
    // Voeg het getal toe aan de som
    sum += i;
}
console.log(sum)


==============================================================
/*
Print de uiteindelijke som
console.log("De som van de even getallen van 1 tot 100 is:", som);


*************************STAP-1*************************

for-loop:
De loop begint bij i = 1 en eindigt bij i = 100.
De waarde van i wordt bij elke iteratie met 1 verhoogd (i++).


*************************STAP-2*************************

Controle of het getal even is:

i % 2 === 0 controleert of het getal even is.
De modulus-operator (%) geeft de rest van de deling van i door 2 terug.
Als de rest 0 is, betekent dit dat i even is.

*************************STAP-3*************************

Toevoegen aan som:
Als het getal even is, wordt het opgeteld bij de huidige waarde van som met som = som +i.

*************************STAP-4*************************

Resultaat:


Na de loop wordt de uiteindelijke som van alle even getallen van 1 tot 100 naar de console geprint.
De som van de even getallen van 1 tot 100 is: 2550
Hoe werkt het?
De loop bekijkt elk getal van 1 tot 100.
Alleen de even getallen worden bij de som opgeteld.
De uiteindelijke som wordt berekend als 2 + 4 + 6 + ... + 100 = 2550.
*/















