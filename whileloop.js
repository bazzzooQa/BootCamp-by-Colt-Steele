// console.log('1. Print all numbers between -10 and 19');
// var number1 = -10;
// while(number1 <= 19) {
// 	console.log(number1);
// 	number1++;
// }
// console.log('2. Print all even numbers between 10 and 40');
// var number2 = 10;
// while(number2 <= 40) {
// 	console.log(number2);
// 	number2+=2;
// }

// console.log('3. Print all odd numbers between 300 and 333');
// var number3 = 300;
// while(number3 <= 333) {
// 	console.log(number3+1);
// 	number3+=2;
// }

// console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
// var number4 = 5;
// while(number4 <= 50) {
// 	if(number4 % 3 === 0 && number4 % 5 === 0) {
// 		console.log(number4);
// 	}
// 	number4++;
// }

//FOR LOOPS!
console.log('1. Print all numbers between -10 and 19');
for (var i = -10; i <= 19; i++) {
	console.log(i);
}
console.log('2. Print all even numbers between 10 and 40');
for (var i = 10; i <= 40; i+=2) {
	console.log(i);
}

console.log('3. Print all odd numbers between 300 and 333');
for (var i = 300; i <= 333; i+=2) {
	console.log(i+1);
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}