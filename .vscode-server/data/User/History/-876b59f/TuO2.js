const arr= ["hello", "ukelele", "awesome", "onomatopoeia","textbook"];

let vowels= ['a','e','i','o','u'];

for(i=0;i<arr.length;i++){
    let consCount=0;
    let vowelsCount=0;
    const currentWord= arr[i]
    for(j=0;j<currentWord.length; j++){
if (vowels.includes(currentWord[j])){
   vowelsCount++  
}
 else{
    consCount++
 }   
    }
    console.log(currentWord+ " has " +consCount +" consonants and "+vowelsCount+ " vowels ")
}

