/*Print de kwadraten van getallen: Gebruik een for-loop om de kwadraten van de
getallen van 1 tot 10 te printen (bijv. 1, 4, 9, 16, ..., 100).
*/

for(let i = 1; i<=10; i++){
    let kwadraten = i*i;
    console.log(`Het kwadraat van ${i} is ${kwadraten}`)
}



/*
De code kan ook op een andere manier geschreven worden(oplossing Tom)

for(let i = 1; i<=10; i++){
    console.log(i*i);
}

*/
//=============================================================================
/*
Uitleg van de Code:
for-loop:

De loop begint bij i = 1 en eindigt bij i = 10.
De waarde van i wordt bij elke iteratie met 1 verhoogd (i++).

Bereken het kwadraat van het getal:
Het kwadraat van i wordt berekend met i * i. Dit betekent dat het getal wordt vermenigvuldigd met zichzelf.

Output:
Voor elke waarde van i wordt het kwadraat afgedrukt met een bericht dat de waarde van i en het kwadraat weergeeft.


Resultaat:

Het kwadraat van 1 is: 1
Het kwadraat van 2 is: 4
Het kwadraat van 3 is: 9
Het kwadraat van 4 is: 16
Het kwadraat van 5 is: 25
Het kwadraat van 6 is: 36
Het kwadraat van 7 is: 49
Het kwadraat van 8 is: 64
Het kwadraat van 9 is: 81
Het kwadraat van 10 is: 100












