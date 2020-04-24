// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//Because of lexical scope. The nestedFunction refrences "internal" and cannot find it within its own execution context so it goes outward to myFunction and finds it there.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(input){
  let count = 0;
  let total = 0;

  function counter(){return count += 1}   //declare counter
  while (input != count) {total += counter();}  //# of loops = input   //invoke counter. count+= 1. total+= count. 
  return total;
}