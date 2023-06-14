/*Establish the function*/
function isTruthy(value){
    /*If the value is truthy, print the corresponding phrase*/
    if(value) { 
    console.log('The value is Truthy');
}
 /*the value is falsy, print the corresponding phrase*/
else if(value === ""){
    console.log("The empty string is falsy, the only falsy string");
}
/*the value is true , print the corresponding phrase*/
else if (value === "I am a string"){
    console.log(true);
}
/*the value is false, print the corresponding phrase*/
else if (value === false){
    console.log('The boolean value false is falsy');
}
//the value is null, print "The null value is falsy"
else if (value === null){
    console.log("The null value is falsy");
}
/*the value is 0, print the corresponding phrase below*/
else if (value === 0) {
    console.log("The number 0 is falsy, the only falsy number");
}
//the value is undefined, print the corresponding phrase below
else if (value === undefined){
    console.log("undefined is falsy");
 }   
}
//execute the above function
isTruthy(0)
isTruthy("")
isTruthy(null)
isTruthy(undefined)
isTruthy(false)
isTruthy("I am a string")
