//Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print de veelvouden van dat getal tot 100

let getal = parseInt(prompt("Geef een getal in:"))

for(let i = 1;i<= 100; i++){
    if(i % getal === 0){
        console.log(i);
    }
}

/*
//let getal = parseInt(prompt("Geef een getal in:"))

prompt("Geef een getal in:") vraagt de gebruiker om een getal in te voeren in een pop-upvenster.
parseInt() converteert de ingevoerde waarde naar een geheel getal.
Dit is nodig omdat de waarde die door prompt() wordt geretourneerd standaard een string (tekst) is,
en we willen er zeker van zijn dat we met een getal werken.
Het resultaat wordt opgeslagen in de variabele getal.
// for(let i = 1; i <= 100; i++)

Dit is een for-loop die begint met i = 1 en loopt zolang i <= 100 is.
De waarde van i wordt na elke iteratie met 1 verhoogd (i++).
if(i % getal === 0)

Binnen de loop wordt een if-statement gebruikt om te controleren of i deelbaar is door het ingevoerde getal (getal).
Dit wordt gedaan door gebruik te maken van de modulus-operator %, die de restwaarde geeft bij deling.
Als de restwaarde van i % getal gelijk is aan 0, betekent dit dat i deelbaar is door getal.
console.log(i);

Als de voorwaarde waar is (dus als i deelbaar is door getal), dan wordt i naar de console gelogd.
*/