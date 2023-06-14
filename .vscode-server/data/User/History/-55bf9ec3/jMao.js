/*With a for loop, create a JavaScript code that creates a new array in reverse order.*/

//delcare a variable that holds your first array
let myArray = [1, 2, 3]
//create a variable that will hold the reversed order
let reversedArray = []
//create the initiation, condition, and after thought in a for loop
/*delcare i as the start point and the condition needs to go
 the length of the array starting with -1(3)*/
for(let i = myArray.length - 1; i >= 0; i--) {
  //create a new varible that will hold the original array and the starting point of the array(i)
  const valueAtIndex = myArray[i]
  //declare the push action to push the reverse order into the orignial array
  reversedArray.push(valueAtIndex)
}
//console.log reversedArray
console.log(reversedArray)
 
//new problem
myArray = [1, 3, 5, 7, 9, 11]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

//another problem but same formula applied
myArray = [20, 50, 30, 60, 200]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

//another problem but same formula applied
myArray = [1, -1, 2, -3, 5, -8, 13]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
