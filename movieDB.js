var movieDB = [
{	
	title: 'Fury',
	rate: '5.0',
	watched: 'yes',
},
{	
	title: 'Avengers',
	rate: '4.5',
	watched: 'yes',
},
{	
	title: 'Accountant',
	rate: '5.0',
	watched: 'no',
},
{	
	title: 'John Wik 2',
	rate: 'does not get rated',
	watched: 'no',
}
];

function seeDB (db) {
	for (var i = 0; i < db.length; i++) {
		if (db[i].watched === 'yes') {
			console.log('You have watched ' + db[i].title + ' - ' + 'rate: ' + db[i].rate + ' stars');
		}
		else {
			console.log('You have not seen ' + db[i].title + ' - ' + 'rate: ' + db[i].rate + ' stars');
		}
	}
}

seeDB(movieDB);