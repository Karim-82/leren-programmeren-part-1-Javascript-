//Product van de eerste 5 getallen: Gebruik een for-loop om het product van de eerste 5 getallen (1, 2, 3, 4, 5) te berekenen.

let product = 1;

for (let i = 1; i <= 5; i=i +1) {
    product = product * i;
}
console.log(product);

/*
Uitleg:
let product = 1;: Hier wordt een variabele product gedeclareerd en ingesteld op 1.
Dit is de startwaarde, omdat als we iets met vermenigvuldiging willen berekenen, we beginnen met 1
(niet 0, want vermenigvuldigen met 0 zou altijd 0 geven).

for (let i = 1; i <= 5; i++): Dit is een for-loop die loopt van 1 tot en met 5.
De variabele i neemt de waarden aan van 1 tot 5 in elke iteratie.

product = product * i;: Bij elke iteratie wordt de huidige waarde van i vermenigvuldigd met de huidige waarde,
van product en het resultaat wordt weer opgeslagen in product.

console.log("Het product van de eerste 5 getallen is: " + product);: Zodra de lus klaar is,
wordt het eindresultaat van het product naar de console gelogd.

Samenvatting van de for-loop:
De for-loop voert de volgende stappen uit:

Initieer: Zet i = 1.
Check: Is i <= 5 waar? Zo ja, voer de code uit. Zo nee, stop de loop.
Uitvoeren: Vermenigvuldig product met i.
Update: Verhoog i met 1.
Herhalen: Ga terug naar stap 2.
Tussenstappen:
Bij elke iteratie verandert de waarde van product als volgt:

product = 1 * 1 = 1
product = 1 * 2 = 2
product = 2 * 3 = 6
product = 6 * 4 = 24
product = 24 * 5 = 120

 */



