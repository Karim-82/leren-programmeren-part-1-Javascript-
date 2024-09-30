// Switch

let nummer1 = 10;
let nummer2 = 5;
let operatie = "optellen";
let result  ;

switch (operatie) {
    case "optellen":
        result = nummer1 + nummer2;
        break
    case "aftrekken":
        result = nummer1 - nummer2;
        break
    case "vermenigvuldigen":
        result= nummer1*nummer2;
        break
    case "delen":
        if(nummer2 !== 0){
            result= nummer1/nummer2;
        }
        else {
            result = "ik kan niet delen door 0"
        }

}
