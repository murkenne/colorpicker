const arr= ["hello", "ukelele", "awesome", "onomatopoeia","textbook"];

let vowels= ['a','e','i','o','u'];

for(i=0;i<arr.length;i++){
    let consCount=0;
    const currentWord= arr[i]
    for(j=0;j<currentWord.length; j++){
    vowels.includes(currentWord[j])
    }
    console.log(currentWord,i)
}

arr.length