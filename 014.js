// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.


(function p014() {

	function gen_sequence(starting_number) {
		var sequence_number = starting_number, count = 1;
		while(sequence_number !== 1) {
			if(sequence_number % 2 == 0) {
				sequence_number /= 2;
			} else {
				sequence_number = (3*sequence_number) + 1;
			}
			count++;
		}
		return count;
	}

	function check_sequence(limit) {
		var longest_chain = [0, 0];
		for(var i = 1; i <= limit; i++) {
			var current_chain = gen_sequence(i);
			if(parseInt(current_chain) > parseInt(longest_chain[0])) {
				longest_chain = [current_chain, i];
			}
		}
		return longest_chain;
	}

	console.log(check_sequence(1000000));

}());
