// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

(function p005() {

  var count = 0, first_divisor = 1, max_divisor = 20, got_it = false;

  // Loop until you find a divisor
  while(got_it === false) {
    count += max_divisor;
    while(count % first_divisor === 0 && first_divisor <= max_divisor) {
      if(first_divisor === max_divisor) {
        got_it = true;
      }
      first_divisor++;
    }
    first_divisor = 1;
  }

  console.log(count);

}());
