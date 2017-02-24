// var button = document.querySelector('button');

// button.addEventListener('click', changeBGcolor);

// function changeBGcolor () {
// 	document.querySelector('body').style.background = 'orange';
// }

var button = document.querySelector('button');
var isOrange = false;

button.addEventListener('click', changeBGcolor)

function changeBGcolor () {
	var body = document.querySelector('body');
	if (isOrange) {
		body.style.background = 'white';
	} else {
		body.style.background = 'orange';
	}
	isOrange = !isOrange;
}