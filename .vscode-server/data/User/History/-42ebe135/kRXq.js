
/*declare param1A, param1B, param2A, param2B in myChart*/
function myChart(param1A, param1B, param2A, param2B){
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
myChart("cat","cat",6,"6")
myChart("five",5,"dog","dawg")
myChart(0,fasle,"horse","horse")
myChart("eight","eight","ate","ate")
myChart("cake","cake","pie","pie");
