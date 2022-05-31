// https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/0/?page=1&sortBy=submissions

/******Question******/

// Missing number in array 
// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

// Example 2:
// Input:
// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9

// Your Task :
// You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)


// Constraints:
// 1 ≤ N ≤ 106
// 1 ≤ A[i] ≤ 106

/*****Answer*****/


/** Sort the array
 * create a loop starting from the lowest value to the value of N.
 * check the next value is equals to present value+1
 * If not then print that value +1.
 */


class Solution{
    MissingNumber(array,n){
        //code here


    }
}

// let arr = [1, 3, 2, 5, 4, 8, 7, 6, 10];
// console.log(arr);

// for (let i=0; i<arr.length; i++){
//     console.log("value of i:", [i])
//     for (let j=(i+1); j<arr.length; j++){
//         console.log("value of j:", [j])

//         if(arr[i]>arr[j]){
//             console.log("if")
//             arr.push(arr[i])
//             arr.splice(i,1);
//             console.log(arr);
//             arr.length -=1;
//             break
//         }
//     }
// }

// console.log(arr);
// for (let i=0; i<arr.length; i++){
//     if (arr[i+1]!==(arr[i]+1)){
//         console.log("ln:",(arr[i]+1))
//         break
//     }
// }


// var numArray = [20,18,10,3,5,1];
// for (var i = 0; i < numArray.length; i++) {
//     var target = numArray[i];
//     console.log("ln:81",target)
//     for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
//         console.log("for")
//         numArray[j+1] = numArray[j];
//     }
//     numArray[j+1] = target
// }
// console.log(numArray);


var array = [2];
// for (var i = 0; i < array.length; i++) {
//     var target = array[i];
//     for (var j = (i - 1); j >= 0 && (array[j] > target); j--) {
//         array[j+1] = array[j];
//     }
//     array[j+1] = target
// }
// console.log(array)
// for (let i=array.length; i>0; i--){

//     if (array[i-1]!==(array[i]-1)){
//         console.log("ln:",(array[i]-1))
//         // break
//     }
// }



array.sort(function(a, b){return a - b});

if ((array[0]===1) && (array.length ===1)){console.log("2")}
if ((array[0]===2) && (array.length ===1)){console.log("1")}
for (let i=array.length-1; i>0; i--){

    if (array[i-1]!==(array[i]-1)){
        console.log("ln:",(array[i]-1))
        break
    }
}