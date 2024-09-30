//Som van de eerste 10 getallen: Gebruik een for-loop om de som van de eerste 10 getallen (1 tot 10) te berekenen.

let som =0;

for(let i = 1;i<=10 ;i++ ){
    som = som + i;
    console.log(som);
}
//output = 1,3,6,10,15,21,28,36,45,55

/*
Wat gebeurt er tijdens de uitvoering?
In de eerste iteratie is i = 1, en sum wordt 0 + 1 = 1.
In de tweede iteratie is i = 2, en sum wordt 1 + 2 = 3.
Dit gaat door totdat i = 10, waarna sum 55 is.
Uiteindelijk geeft de console de tussenliggende sommen weer, zoals: 1, 3, 6, 10, 15, 21, 28, 36, 45, en 55.
 */
