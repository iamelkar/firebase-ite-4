let x = 6
let y = 9
console.log(x+y)

var nme = "rel"
var desc = "vovo"
console.log("\n")
console.log(nme+desc)

const a = 5
const b = 7
console.log("\n")
console.log(a+b)

////////////////// if-else
let grade = 75
let z = 1
console.log("\n")

if(grade === 75){
    console.log(`Your grade is ${grade}`)
}
else{
    console.log("Your grade is unknown")
}

/// for loop
for(let i = 0; i < grade; i++){
    z = z + 1
    console.log(z)
}

//////////// values of string array
let c = "fivehundredtwentyfivethousandsixhundredminutes"
let d = true
console.log("\n")

for(let i = 0; i < c.length; i++){
    console.log(c[i])
}

///// pila ka [x] char
console.log("\n")
for(let i = c.length - 1; i >= 0; i--){
    if(c[i] === "e" && d === true){
        console.log(c[i])
    }
}