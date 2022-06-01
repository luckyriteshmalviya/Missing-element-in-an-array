# Missing-element-in-an-array
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.


## Question

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

# Answer



/*****Answer*****/  

# Answer_01  
/** 
 * Sort the array.
 * If array is not includes one then return one.
 * If array is includes one then procced further process. 
 * Create a loop starting from the lowest value of array to the value of N.
 * Check the next value is equals to present value+1
 * If not then print that value +1.
 */
  
/**For Sorting of array
 * Create a loop starting from i =  index 0 to i = to the length of array.
 * Create another loop starting from i+1 to the length of array.
 * Check wheather array of index i is greater than array of index j or not.
 * If yes than remove that value and move that value to the last index.
 * And decrease the value of i by 1 so our loop get not affected.
 */
  
let array = [1,2,3,5,4,8,6,7,10];  
let n = 5;  

for (let i=0; i<array.length; i++){  
    for (let j=(i+1); j<array.length; j++){  
        if(array[i]>array[j]){  
            array.push(array[i])  
            array.splice(i,1);  
            i--  
            continue  
    } } } 
      
console.log(array)  
    if (array.includes(1)){  
        for (let i=0; i<array.length; i++){  
            if (array[i+1]!==(array[i]+1)){  
                console.log("ln:",(array[i]+1))  
                break  
            } } }  
    else{  
        console.log(1);  
    }  
  


# Answer_02

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
            } } }  
    else{  
        console.log(1);  
    }  


# Answer_03

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





















