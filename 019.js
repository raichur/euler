// You are given the following information, but you may prefer to do some research for yourself.
//
// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

(function p019() {

	var sundays = [],
			from = new Date(),
			month = 1,
			year = 1901;

	while(year <= 2000) {
		if(month == 12) {
			month = 0;
			year++;
		}
		from.setFullYear(year, month++, 1);
		if(from.getDay() === 0) {
			sundays.push(from.toLocaleDateString());
		}
	}

	console.log(sundays.length);

}());
