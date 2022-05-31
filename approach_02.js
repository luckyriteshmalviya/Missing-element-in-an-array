let array = [2,3,5,4,7];
let n = 5;

// array.sort(function(a, b){return a - b});

// if ((array[0]===1) && (array.length ===1)){console.log("2")}
// if ((array[0]===2) && (array.length ===1)){console.log("1")}
// for (let i=0; i<array.length; i++){
//         if (array[i+1]!==(array[i]+1)){
//             console.log("ln:",(array[i]+1))
//             break
//         }
//     }


    array.sort(function(a, b){return a - b});
console.log(array)
    if (array.includes(1)){
        for (let i=0; i<array.length; i++){
            if (array[i+1]!==(array[i]+1)){
                console.log("ln:",(array[i]+1))
                break
            }
        }
    }
    else{
        array.unshift(1);
        console.log(array);
    }