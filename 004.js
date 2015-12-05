// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

(function p004() {

  var palindromes = [], min_num = 100, max_num = 999, largest_palindrome_array, largest_palindrome = [0, 0, 0];

  // Check if palindrome
  function palindromator(number){
    return number == number.toString().split('').reverse().join('');
  }

  // Create an array with the palindromes
  function get_palindrome_array(min, max) {
    for(var i = max; i >= min; i--) {
      for(var y = max; y >= min; y--) {
        if(palindromator(i*y)) {
          palindromes.push([i, y, i*y]);
        }
      }
    }
    return palindromes;
  }

  // Find the largest palindrome from the array
  function find_largest_palindrome(array) {
    array.forEach(function(element, index) {
      if(array[index][2] > largest_palindrome[2]) {
          largest_palindrome = array[index];
        }
        return largest_palindrome;
    });
    return largest_palindrome;
  }

  largest_palindrome_array = get_palindrome_array(min_num, max_num);
  largest_palindrome = find_largest_palindrome(largest_palindrome_array);

  return largest_palindrome;

}());
