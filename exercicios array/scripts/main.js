//EXERCICIO PRINTAR REVERSO---------------------------------
/*var list = ["a","b","c","d","e"];

function printReverse() {

	for(var i = list.length -1; i >= 0; i--) {
		console.log(list[i]);
	}
}
printReverse();
*/
//-----------------------EXERCICIO ISUNIFORM-----------------------------------
/*var list = [1,1,2,1,1];

function isUniform() {
	//comparar todos os indices
	if(compara() === list.length) {
		return true;
	} else {
		return false;
	}
}
function compara() {
	var seguraPrimeiroValor = list[0];
	var a = 0;
	for (var i = 0; i < list.length; i++) {
		if(seguraPrimeiroValor == list[i]) {
			a++;
		} else {
			a--;
		}
	}
	return a;
}
*/
//console.log(isUniform());

//=======================OUTRA SOLUÇÃO=======================
/* 
function isUniform(arr) {
	var first = arr[0];
	for(var i =1. i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}

*/
 

//-----------------------EXERCICIO SOMA ARRAY-------------------------------------
/*var list = [1,2,3,4,5];

function sumArray() {
	var resultado = 0;

	for(var i = 0; i < list.length; i++) {
		resultado += list[i];
	}
	return resultado;
}
console.log(sumArray());*/



//------------------EXERCICIO NUMERO MAX DO ARRAY---------------------------------

/*var list = [1,80,3,1,5,6];

function showMaxNumber(){
	console.log(getMax());
}

function getMax() {

	for(var i = 0; i < list.length; i++) {
		if(isMaior(list[i])){
			return list[i];
		}
	}
}

function isMaior(n){
	for(var i = 0; i < list.length; i++) {
		if(n < list[i]){
			return false;
		}
	}
	return true;
}

showMaxNumber();*/


//********OUTRA SOLUÇÃO************

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}