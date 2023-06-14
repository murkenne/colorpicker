/*Create a JavaScript code that accepts a string of lowercase letters. 
Print the word followed by how many consonants and vowels it has.*/

const arr= ["hello", "ukelele", "awesome", "onomatopoeia","textbook"];

let vowels= ['a','e','i','o','u'];
//for loop formula
for(i=0;i<arr.length;i++){
    let consCount=0;
    let vowelsCount=0;
    const currentWord= arr[i]
    for(j=0;j<currentWord.length; j++){
      //if else booleans used
if (vowels.includes(currentWord[j])){
   vowelsCount++  
}
 else{
    consCount++
 }   
    }
    //execute the code
    console.log(currentWord+ " has " +consCount +" consonants and "+vowelsCount + " vowels ")
}

