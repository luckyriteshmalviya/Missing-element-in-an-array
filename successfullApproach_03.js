/**
 * Sum up all the individual elements present in the array by using for loop.
 * Now by using the given length of array Calculate the expected sum of array.
 * For this calculation use a mathematical expression => n*(n+1)/2.
 * Now calculte the difference of these two sum. 
 */

let array = [1]
let sum = 0;
for (let i=0; i<array.length; i++){
 sum = sum + array[i];
}
// console.log(sum);

// The length of array should be 8.
let n = 2;
const sum_01 = n*(n+1)/2
// console.log(sum_01);

const res = sum_01-sum;
console.log(res);
