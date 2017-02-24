// //isEven
// var number = +prompt('Please, enter a number!');
// isEven(number);
// function isEven(x) {
// 	if (x === 0) {
// 		console.log ('It is null!');
// 	}
// 	else if (x % 2 !== 0) {
// 		console.log ('It is odd number');
// 	}
// 	else if (x % 2 === 0) {
// 		console.log ('It is Even number');
// 	}
// }

// //factorial
// factorial(number);

// function factorial(x) {
// 	for(var i = x, fact = 1; i > 0; i--) {
// 		fact = fact * i;
// 	}
// 	console.log(fact);
// }

//kebab to snake
var string = prompt('Please enter some text with kebab');
kebabToSnake(string);
// function kebabToSnake (str) {
// 	var newStr = str.replace(/-/g, '_');
// 	return newStr;
// }

function kebabToSnake (str) {
	var newStr = new Array ();
	var backStr;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '-') {
			newStr.push('_');
			backStr = newStr;
		}
		else {
			newStr.push(str[i]);
			backStr = newStr;
		}
	}
	console.log(backStr);
}
