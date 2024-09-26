// let, var, const
// let blockscope, var universeel, const is een vaste waarde

//DATAYPES

let stringNum = "123";
stringNum = parseInt(stringNum);
console.log(stringNum);
console.log(typeof(stringNum));

console.log(stringNum);


let objectPersoon = {
    naam:"Karim",
    adres:"straat",
    age:42

}
 console.log(objectPersoon);

let familieNaam = "Hachmi";
let geboorteJaar = 1982;
let huidigeJaar = 2024;

let result = huidigeJaar - geboorteJaar;
console.log("Het resultaat van " + familieNaam + " is " + result);
console.log(`Het resultaat van ${familieNaam} is ${result}`);


let getal1 = parseInt(prompt("Voer je eerste getal in:"));
let getal2 = parseInt(prompt("Voer je tweede getal in:"));

console.log(`${getal1}+${getal2} = ${getal1+getal2}`)





