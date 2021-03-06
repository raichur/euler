// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

(function p001() {

  // Defining count and sum variables
  var count = 1000, sum = 0;

  while(count--) {
    if(count % 3 == 0 || count % 5 == 0) {
      sum += count;
    }
  }

  console.log(sum);

}());
