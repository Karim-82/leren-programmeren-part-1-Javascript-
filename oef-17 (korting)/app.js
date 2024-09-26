let hoeveelGetallen = parseInt(prompt("hoeveel getallen wens je in te geven?"));
let getal;
let som=0;

for(let i = 1; i<=hoeveelGetallen;i++){
    getal = parseInt(prompt(`Geef getal ${i} in:`));
    som = som +getal;
}
console.log(som);