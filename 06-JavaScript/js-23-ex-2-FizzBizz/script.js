/*
- iterate integers from 1 to 100
- for 3x print Fizz
- for 5x print Buzz
- for 3x and 5x FizzBuzz

*/



for (let i = 1; i < 101; i++ ) {
  if (i % 3 == 0)
    console.log("Fizz");
} else if (i % 5 == 0) {
  console.log("Buzz");
}


