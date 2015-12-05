// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

(function p003() {

  var num = 600851475143;

  function prime_factorize(number) {

    var root = Math.sqrt(number),
        result = arguments[1] || [],
        count = 2;

    if(number % count) {
      count = 3;
      while((number % count) && ((count += 2) < root)) {}
    }
    // It's a prime if no number is found
    count = (count <= root) ? count : number;
    result.push(count);

    return (count === number) ? result : prime_factorize(number/count, result);

  }

  var all_prime_factors = prime_factorize(num), largest_prime_factor = all_prime_factors[all_prime_factors.length-1];


  return largest_prime_factor;

}());
