let x = [0, 0, 1, 2, 1, 3, 3, 5, 5, 6, 6, 7] //gets 2
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9] //gets 9

let uniqueNum = [];
// numbawan
for(let i = 0; i < x.length; i++){
    let sameNum = 0;
    
    for(let j = 0; j < x.length; j++){
        if(x[i] === x[j]){
            sameNum++
        }
    }

    if(sameNum === 1){
       console.log(x[i])
    
    }
}

//numbatwo
for(let i = 0; i < y.length; i++){
    let sameNum = 0;
    
    for(let j = 0; j < y.length; j++){
        if(y[i] === y[j]){
            sameNum++
        }
    }

    if(sameNum === 1){
        console.log(y[i])
    }
}