let getal = 1;
let grens = parseInt(prompt("Geef een getal in:"))

while(getal <= grens){
    console.log(getal)
    if(getal === 1){
        getal = getal *4;
    }
    else {
        getal = getal **2;
    }
    console.log(getal);
}