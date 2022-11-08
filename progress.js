console.log("Szeretnék megtanulni programozni.")

let igen = "javasript"
console.log(igen)

let a = 58
let b = 84
console.log(a * b)

let c = 13
if (c %= 2) {
    console.log("Páratlan vagyok!")
} else {
    console.log("páros vagyok!")
}

let i = 1
while(i <= 10){
    console.log("hazudni bűn")
    i++
}

for (let g = 10;g <= 500;g += 2){
    console.log(g)
}

function nev(nev){
 console.log("hello",nev)
}
nev("kristof")

let szorzas = (sus,baka) => sus * baka;

console.log(szorzas(10,20))

function reverse(s){
    return s.split("").reverse().join("").split(" ");
}
console.log(reverse("kész a szék"))

    


