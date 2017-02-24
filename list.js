var todos = ['Buy New Turtle'];

var input = prompt('What whould You like to do?');

while (input !== 'quit') {
		if (input === 'list') {
			listTodos();
	}
	else if (input === 'new') {
		addTodo();
	}
	else if (input === 'del') {
		delTodo();
	}
	input = prompt('What whould You like to do?');
}
console.log('Ok, you will quit the app now!');

//FUNCTIONS
function listTodos() {
	console.log('*********');
			todos.forEach(function(todo, i) {
				console.log(i + ': ' + todo);
			});
			console.log('*********');
}

function addTodo() {
	//ask for new todo
	var newTodo = prompt('Please, enter new todo!');
	//add to todos array
	todos.push(newTodo);
	console.log('New todo has been successfully added!')
}

function delTodo() {
	//ask for index of todo to be deleted
		var index = prompt('Please, enter and index of todo to remove');
		//delete this todo
		//splice()
		todos.splice(index,1);
		//feedback if successfull
		console.log('Todo has been deleted...');
}
