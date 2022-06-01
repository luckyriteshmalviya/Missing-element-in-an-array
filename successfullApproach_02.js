
let array = [10,1,2,5,3,6,8,7];
let n = 5;


array.sort(function(a, b){return a - b});

console.log("sorted array :",array)
    if (array.includes(1)){
        for (let i=0; i<array.length; i++){
            if (array[i+1]!==(array[i]+1)){
                console.log("ln:",(array[i]+1))
                break
            }
        }
    }
    else{
        console.log(1);
    }




