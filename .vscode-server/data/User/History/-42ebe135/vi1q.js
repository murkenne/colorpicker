
/*declare param1A, param1B, param2A, param2B in myChart*/
function myFunction(param1A, param1B, param2A, param2B){
    if(param1A=== param1B ||param2A=== param2B){
        console.log(true);
    }else{
        console.log(false)
    }
    //if the given code is correct it will print whats in the console.log is its not correct it will print the else statement
    
    /*else if("five"===5  "dog"=== "dawg"){
        console.log(false);
    }
    else if(0=== fasle && "horse"==="horse"){
        console.log(true);
    }
    else if("eight"=== "eight" && "ate"=== "ate"){
        console.log(true);
    }
    else if(11=== "eleven" && "four"=== "for"){
        console.log(false);
    }
    else("cake"=== "cake" && "pie"==="pie"){
        console.log(true);
    }*/
};
//execute the above function
myFunction("cat","cat",6,"6")
myFunction("five",5,"dog","dawg")
myFunction(0,fasle,"horse","horse")
myFunction("eight","eight","ate","ate")
myFunction("cake","cake","pie","pie")