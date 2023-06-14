/*Create a JavaScript code that prints each number from 1 to 100 on a new line.*/

for ( var i = 1; i <= 100; i++)
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    //For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.*/
    console.log( i + " FizzBuzz" );
  }
// For each multiple of 3, print "Fizz" instead of the number.
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  //For each multiple of 5, print "Buzz" instead of the number.
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    //just input the number if it doesnt meet any of the above conditions
    console.log(i);
  }
}