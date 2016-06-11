// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


(function p009() {

  var p1, p2 = 1, p3;

  for(p2; p2 < 1000; p2++) {
    p1 = (500000 - 1000 * p2) / (1000 - p2);

    if(Math.floor(p1) === p1) {
      p3 = 1000 - p1 - p2;
      break;
    }
  }

  console.log(p1*p2*p3);

}());
