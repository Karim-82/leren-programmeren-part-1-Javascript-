let teRadenGetal = 7;


let invoerGetal = parseInt(prompt("Geef een getal in:"));

while(teRadenGetal !== invoerGetal){
    invoerGetal = parseInt(prompt("Verkeerde getal! Geef opnieuw een getal in:"));
    if(invoerGetal < teRadenGetal){
        console.log("Het getal moet groter!");
    }
    else {
        console.log("Het getal moet kleiner zijn!")
        invoerGetal = parseInt(prompt("Verkeerde getal! Geef opnieuw een getal in:"));
    }

}