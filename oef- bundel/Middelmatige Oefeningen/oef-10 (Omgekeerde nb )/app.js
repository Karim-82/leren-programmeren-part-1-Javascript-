/*
het omgekeerde van een getal: Vraag een getal aan de gebruiker en gebruik een
for-loop om het omgekeerde van dat getal te printen (bijv. 1234 wordt 4321)
*/


// Vraag een getal aan de gebruiker
Let number = parseInt(prompt("Voer een getaL in:"));
Let reversed = 0;
for (Let i = number; i > 0; i = (i - (i % 10)) / 10) {
    Let LaatsteCijfer = i % 10; // HaaL het Laatste cijfer
    reversed = reversed * 10 + LaatsteCijfer; // Voeg het Laatste cijfer
    toe aan reversed
}
consoLe. Log(reversed);



/*
Uitleg:
De initiatiefase in de for-loop begint met Let i = number, wat ervoor zorgt dat de loop begint met het ingevoerde getal.
De voorwaarde is i > 0, wat betekent dat de loop doorgaat totdat i gelijk is aan 0.
In de updatefase wordt i verminderd door telkens het laatste cijfer te verwijderen: (i - (i % 10)) / 10.
Dit haalt het laatste cijfer weg.
Binnen de loop wordt het omgekeerde getal opgebouwd door reversed telkens te vermenigvuldigen met 10,
en het laatste cijfer (i % 10) toe te voegen.
Op deze manier wordt het omgekeerde van het getal berekend met een volledige for-loop.
 */
