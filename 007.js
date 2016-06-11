// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?


(function p007() {

  function find_prime(prime_number_index) {
    var i, primes = [2, 3], n = 5;

    function prime(n) {
      var i = 1, p = primes[i],
          limit = Math.ceil(Math.sqrt(n));
      while(p <= limit) {
        if(n % p === 0) {
          return false;
        } else {
          i++;
          p = primes[i];
        }
      }
      return true;
    }

    for(i = 2; i <= prime_number_index; i++) {
      while(!prime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }
    return primes[prime_number_index - 1];
  }

  console.log(find_prime(10001));

}());
