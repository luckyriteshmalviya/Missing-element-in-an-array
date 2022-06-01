
/** 
 * Sort the array by using inbuilt method.
 * If array is not includes one then return one.
 * If array is includes one then procced further process. 
 * Create a loop starting from the lowest value of array to the value of N.
 * Check the next value is equals to present value+1
 * If not then print that value +1.
 */

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




