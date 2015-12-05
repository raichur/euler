// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


(function p006() {

  var sum_of_squares = 0, square_of_the_sum = 0, result = 0;

  // Calculate the sum of squares
  function calculate_sum_of_squares() {
    for(var i = 0; i <= 100; i++) {
      sum_of_squares += i*i;
    }
    return sum_of_squares;
  }

  // Calculate square of the sum
  function calculate_square_of_sum() {
    for(var j = 0; j <= 100; j++) {
      square_of_the_sum += j;
    }
    square_of_the_sum = square_of_the_sum*square_of_the_sum;
    return square_of_the_sum;
  }

  // Calculate the ddifference between teh square of the sum and the sum of the squares
  function get_difference() {
    result = square_of_the_sum - sum_of_squares;
    return result;
  }


  // Run them functions!
  calculate_sum_of_squares();
  calculate_square_of_sum();
  get_difference();

  console.log(result);

}());
