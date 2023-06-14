let myArray = [1, 2, 3]

let reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
 
myArray = [1, 3, 5, 7, 9, 11]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

myArray = [20, 50, 30, 60, 200]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

myArray = [1, -1, 2, -3, 5, -8, 13]

reversedArray = []

for(let i = myArray.length - 1; i >= 0; i--) {
  const valueAtIndex = myArray[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
