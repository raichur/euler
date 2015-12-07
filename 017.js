// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


(function p017() {

	function number_to_words(n) {
		var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
			b = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
			g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'octillion', 'nonillion'];

		function grp(n) {
			return ('000' + n).substr(-3);
		}

		function rem(n) {
			return n.substr(0, n.length - 3);
		}

		function fmt(_ref) {
			var h = _ref[0],
				t = _ref[1],
				o = _ref[2],
				and = '';
			if(Number(o[t]) !== 0) {
				and = 'and';
			}
			return [Number(h) === 0 ? '' : a[h] + 'hundred' + and, Number(o) === 0 ? b[t] : b[t] && b[t] + '' || '', a[t + o] || a[o]].join('');
		}

		function cons(xs) {
			return function(x) {
				return function (g) {
					return x ? [x, g && '' + g || '', '', xs].join('') : xs;
				};
			};
		}

		function iter(str) {
			return function(i) {
				return function (x) {
					return function (r) {
						if(x === '000' && r.length === 0) return str;
						return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
					};
				};
			};
		}
		return iter('')(0)(grp(String(n)))(rem(String(n)));
	}

	function add_strings(limit) {
		var sum = "";
		for(var i = 0; i <= limit; i++) {
			sum += (number_to_words(i).toString());
		}
		return sum;
	}

	console.log(add_strings(1000).length);

}());
