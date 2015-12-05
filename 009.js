// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


(function p009() {

  var a, b, c, m1, m2, m3, ans1, ans2, ans3, result;

  function find_pythagorean_triplet() {
    for(var n = 2; n <= 2000000; n++) {
      a = 2 * n + 1;
      b = 2 * n * (n +1);
      c = 2 * n * (n +1) + 1;
      if(a < b < c) {
        if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          m1 = a;
          m2 = b;
          m3 = c;
        }
        if(a + b + c === 1000) {
          ans1 = a;
          ans2 = b;
          ans3 = c;
        }
      }
    }
    result = [ans1, ans2, ans3];
    return result;
  }

  find_pythagorean_triplet();
  return result;

}());
