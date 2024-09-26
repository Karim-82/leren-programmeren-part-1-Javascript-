let hoeveelGetallen = parseInt(prompt("Hoeveel getallen:"))
let getallen;
let total = 0;

for(let i = 1; i<=hoeveelGetallen;i++){
    getallen = parseInt(prompt(`Geef getal ${i} in`));
    total+= getallen;
}
console.log(`De totale som van ${hoeveelGetallen} is ${total}`);




