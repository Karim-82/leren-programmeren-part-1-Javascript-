//Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16, 32, ...,
//totdat de waarde groter is dan een door de gebruiker opgegeven getal

let getal = parseInt(prompt("Geef een getal in:"))

for(let i =1;i<= getal;i = i*2){
    console.log(i);
}

// 1*2=2    loop:1
// 2*2=4    loop:2
// 4*2=8    loop:3
// 8*2=16   loop:4
// 16*2=32  loop:5
// 32*2=64  loop:6
// 64*2=128 loop:7
// 128*2=256 loop:8
// 256*2=512 loop:9
// 512*2=1024 loop:10
// 1024*2=2048 loop:11
// 2048*2=4096 loop:12
// 4096*2=8192 loop:13
// 8192*2=16384 loop:14
// 16384*2=32768 loop:15
// 32768*2=65536 loop:16
// 65536*2=131072 loop:17
// 131072*2=262144 loop:
