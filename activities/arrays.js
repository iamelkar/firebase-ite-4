let x = [0,1,2,3,4]
let y = ["hello", "world", "it", "is", "me"]
let z =[[1,4], [5,6], [7,8]]
let a = [1, 2, "appl3", true, [8,9], 4, 5, 6, 7]

// console.log(x)
// console.log(z)

// 2D Array
for(let i = 0; i < z.length;  i++){
   // console.log(y[i])

   for(let j = 0; j < z[i].length; j++){
    console.log(z[i][j])
   }
}

for (let i = 0; i < a.length; i++){
    console.log(a[i])
}

