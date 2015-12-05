// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


(function p010() {

  var primes = 0, is_prime, sum_of_primes = 0;

  for(var i = 2; i <= 2e+6; i++) {
    is_prime = true;
    var limit = Math.round(Math.sqrt(i));
    for(var mod = 2; mod <= limit; mod++) {
      if(i % mod == 0) {
        is_prime = false;
        break;
      }
    }
    if(is_prime){
      sum_of_primes += i;
      primes += 1;
    }
  }

  console.log(sum_of_primes);

}());
