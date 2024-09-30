//Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te
// printen.

for(let i = 2; i<=100;i++){
    let isPrime = true;
    for(let j= 2;j<i;j++){
        if(i % j === 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        console.log(i);
    }
}




// let i = 2 - 3 - 4 - 5 - 6 - 7
// let j = 1 - 2 - 3 - 4 - 5 - 6