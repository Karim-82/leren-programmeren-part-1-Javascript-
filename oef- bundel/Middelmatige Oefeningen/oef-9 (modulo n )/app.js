/*Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag een getal n aan de
gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5
*/


// Vraag een getal n aan de gebruiker
let n = parseInt(prompt("Geef een getal in:"))

// Loop door de getallen van 1 tot n en print de getallen die deelbaar zijn door 5
for(let i=1; i<= n; i++){
    //Controleer of het getal deelbaar is door 5
    if(i %5 ===0){
        //Als het deelbaar is door 5, print het getal
        console.log(i);
    }
}

/*
UITLEG

For loop:

let i = 1;: De loop begint bij het getal 1, dat is de startwaarde van i.
i <= n;: De loop zal doorgaan zolang i kleiner is dan of gelijk is aan de waarde van n.
Dus als n = 50, zal de loop doorgaan tot en met 50.
i++: Dit verhoogt de waarde van i met 1 na elke iteratie van de loop.
Dit zorgt ervoor dat de loop door alle getallen van 1 tot n loopt

Controleren of het getal deelbaar is door 5:

i % 5: Dit is de modulus operator (%), die de rest berekent wanneer i door 5 wordt gedeeld.
Als de rest 0 is, betekent dit dat i deelbaar is door 5.
Bijvoorbeeld:
10 % 5 geeft 0, omdat 10 perfect deelbaar is door 5.
12 % 5 geeft 2, omdat er een rest van 2 is wanneer je 12 deelt door 5.
*/










