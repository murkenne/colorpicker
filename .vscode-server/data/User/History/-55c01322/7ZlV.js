/*Create a JavaScript code that accepts an array of numbers and returns 
a new array with only the odd numbers from the original array. If there
 is only one odd number in the array, return an array with that single value.*/

 //declare an array with the process below
let arr = [2, 4, 6, 8, 11, 20, 15, 22]

//delcare a variable that only prints the odd numbers and puts them in a new array
let odds = arr.filter(n => n%2)

//execute the code
console.log(odds)

//new array, assign the same formula to the array below for similar results
 arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 odds = arr.filter(n => n%2)

console.log(odds)

//new array, assign the same formula to the array below for similar results
arr = [70, 42, 55, 81, 21, 91, 34]

 odds = arr.filter(n => n%2)

console.log(odds)

//new array, assign the same formula to the array below for similar results
arr = [2, 4, 6, 8, 10, 11, 12] 

 odds = arr.filter(n => n%2)

console.log(odds)