// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!

// NOTE: Needs Math.js to work


(function p020() {

	math.config({precision: 2000});

	var value = math.bignumber(100),
			result = math.format(math.factorial(value), {notation: 'fixed'}),
			split_result = result.split(''),
			result_length = split_result.length,
			total = 0;

	for(var i = 0; i < result_length; i++) {
		total = total + Number(split_result[i]);
	}

	console.log(total);

}());
