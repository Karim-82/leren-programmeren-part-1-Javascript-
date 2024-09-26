let age = parseInt(prompt("Wat is uw leeftijd?:"))

if(age >= 18){
    console.log(`Je bent ${age} jaar oud, je hebt toegang tot de website van de Nationale Lotterij!`)
    let aantalVakjes = parseInt(prompt("Geef u aantal vakjes in:"));
    if(aantalVakjes === 12){
        console.log('De prijs voor 12 vakjes is €20!')

    }else if(aantalVakjes === 10){
        console.log(`De prijs voor 10 vakjes is €10!`)
    }
    else  if(aantalVakjes === 8){
        console.log(`De prijs voor 8 vakjes is €6!`)
    }
    else if(aantalVakjes === 6){
        console.log(`De prijs voor 4 vakjes is €4!`)
    }
    else if (aantalVakjes === 2){
        console.log(`De prijs voor 2 vakjes is €2!`)
    }
}

else {
    console.log(`Je bent minderjarig, je heb hebt geen toegang tot oneze website! `)
}

//==========================================================================================//




