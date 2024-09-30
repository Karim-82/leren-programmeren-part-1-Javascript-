//Som van de oneven getallen: Gebruik een for-loop om de som van de even getallen van 1
// tot 100 te berekenen

let som = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        som += i;
    }
}
console.log(som);

/*
=======De code kan ook op een andere manier geschreven worden (Oplossing Tom)======
let sum =0;

for(let i=1; i<=100; i= i+2){
    sum= sum+i;
}
console.log(sum);
*/


/*

1. let som = 0;

Dit deel van de code declareert een variabele som en geeft deze de waarde 0.
Deze variabele wordt gebruikt om de som van alle oneven getallen op te slaan.
================================================================================
2. for (let i = 1; i <= 100; i++)

Dit is een for-loop die begint bij i = 1 en doorgaat zolang i <= 100 is.
Bij elke iteratie wordt de waarde van i met 1 verhoogd (i++).
Dit betekent dat i door alle getallen van 1 tot en met 100 loopt.
================================================================================
3. if (i % 2 !== 0)

Hier wordt een if-statement gebruikt om te controleren of i een oneven getal is.
i % 2 !== 0 gebruikt de modulus-operator % om de restwaarde te bepalen van de deling van i door 2.
Als i % 2 === 0, is i een even getal.
Als i % 2 !== 0, is i een oneven getal.
Dit betekent dat de code binnen deze if-blok alleen wordt uitgevoerd als i een oneven getal is.
================================================================================
4. som += i;

Als i een oneven getal is, wordt het toegevoegd aan de variabele som.
som += i; is een verkorte schrijfwijze van som = som + i;.
Dus bij elke iteratie waarbij i oneven is, wordt de waarde van i opgeteld bij de bestaande waarde van som.
================================================================================
5. console.log(som);

Na de for-loop wordt de uiteindelijke waarde van som naar de console geprint.
Dit is de som van alle oneven getallen tussen 1 en 100.
================================================================================
Wat doet de code precies?
=========================
De code initialiseert som als 0.
Vervolgens loopt het door alle getallen van 1 tot 100.
Bij elk oneven getal (zoals 1, 3, 5, 7, enz.) voegt het dat getal toe aan som.
Ten slotte print de code de waarde van som, wat de totale som van alle oneven getallen tussen 1 en 100 is.
Voorbeeld:
Oneven getallen tussen 1 en 100 zijn: 1, 3, 5, 7, ..., 99.
De som van deze getallen is 2500, en dat zal de waarde van som zijn die wordt uitgeprint.
 */














