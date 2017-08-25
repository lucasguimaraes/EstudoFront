var listTodo = [];
var answer = prompt("O que voce gostaria de fazer?");

while(answer !== "quit") {

	if (answer === "list") {
		listTodos();

	} else if (answer === "new") {
		addTodo();
	}

	else if (answer === "delete") {
		deleteTodo();
	}

	answer = prompt ("O que voce gostaria de fazer?");
}
console.log("saiu");

function listTodos() {
	console.log("************");
		console.clear();
		/*for (var i = 0; i < listTodo.length; i++) {
			console.log("" +i +": " + listTodo[i]);
		}
		console.log("************");*/

		listTodo.forEach(function(listTodo, i) {
			console.log(i + ": " + listTodo);
		});

		console.log("************");
	}

	function addTodo() {
		var addTodo = prompt("Entre com um novo to do");
		listTodo.push(addTodo); 
	}

	function deleteTodo() {
		var indexToDelete = prompt("Entre com um index para deletar")
		var itemRemovido = listTodo.splice(indexToDelete, 1);
		alert("TODO REMOVIDO: "+itemRemovido);

	}

