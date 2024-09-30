//Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te
// printen.

//Print priemgetallen tussen 1 en 100
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

/*
Uitleg: De buitenste loop gaat door elk getal van 2 tot 100. De binnenste loop
controleert of het getal ï deelbaar is door een getal kleiner dan zichzelf. Als dat zo is, is het geen priemgetal.
 */

