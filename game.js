//create secret number
var secretNum = 4;

//ask user for guess
var guess = Number(prompt('Guess a number!'));
alert(guess);

//check guess
if (guess === secretNum) {
	alert('U got it!')
}

//otherwise, check is higher
else if (guess > secretNum) {
	alert('Too high, guess again!');
}

//otherwise, check is lower
else {
	alert('Too lowm guess again!');
}