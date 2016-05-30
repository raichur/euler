// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

(function p016() {

	function sum_of_digits(base, exponent) {
		var number = scientific_to_regular(Math.pow(base, exponent).toString()).toString(),
				sum = 0;

		for(var i = 0; i < number.length; i++) {
			sum += parseInt(array[i]);
		}
		return sum;
	}



	console.log(sum_of_digits(2, 1000));

}());
