//reverse function - print array in reverse mod
var nums = [1, 2, 3, 4];

function printReverse(myArr) {
	for (var i = myArr.length-1; i >= 0; i--) {
		console.log(myArr[i])
	}
}

printReverse (nums);

//uniform function
var uni = [1, 1, 2, 1];

function isUniform(myArr) {
	var fst = myArr[0];
	for (var i = 1; i < myArr.length; i++) {
		if (fst !== myArr[i]) {
			console.log('Something is wrong!');
			return false;
		}
		else {console.log('Everything is OK!')}
	}
	return true;
}

isUniform (uni);

//function summary
var calc = [1, 10, 20, 34];

function sum(myArr) {
	for (var i = 0, result = 0; i < myArr.length; i++) {
		result += myArr[i];
	}
	console.log('The sum of the array is ' + result);
}

sum (calc);

//function of search a maximum value in array

var dskgadg = [10, 50, 30, 40];

function max(myArr) {
	var maximum = myArr[0];
	for (var i = 1; i < myArr.length; i++) {
		if (maximum < myArr[i]) {
			maximum = myArr[i];
		}
	}
	console.log(maximum);
}

max(dskgadg);