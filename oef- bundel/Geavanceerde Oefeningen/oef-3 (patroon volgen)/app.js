//Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16, 32, ...,
//totdat de waarde groter is dan een door de gebruiker opgegeven getal.

let getal = parseInt(prompt("Geef een getal in:"))

for(let i =1;i<= getal;i = i*2){
    console.log(i);
}


// 1*2=2    loop:1
// 2*2=4    loop:2
// 4*2=8    loop:3
// 8*2=16   loop:4
// 16*2=32  loop:5

