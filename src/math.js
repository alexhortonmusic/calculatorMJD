'use strict';

let output = $('#output');
let box1 = $('#text1');
let mathArr = [];
let boxValue;
let mathFunctionToPerform;

$('.btn').click(function () {
	boxValue = parseInt(box1.val());
	mathArr.push(boxValue);
	box1.val('');
	console.log("mathArr", mathArr);
	mathFunctionToPerform = $(this).attr('value');
	if (mathFunctionToPerform === 'square' || mathFunctionToPerform === 'squareRoot') {
		if (mathFunctionToPerform === 'square') {
			let total = square(mathArr[0]);
			box1.val(total);
			printThenClear();
		}
		else if (mathFunctionToPerform === 'squareRoot') {
			let total = squareRoot(mathArr[0]);
			box1.val(total);
			printThenClear();
		}
	}
	else {
		console.log("mathFunctionToPerform", mathFunctionToPerform);
		totalUpValues();
		}

});

function totalUpValues () {
	box1.keypress(function () {
		let valueA = mathArr[0];
		let valueB = parseInt(box1.val());
		if (event.which == 13) {
				if (mathFunctionToPerform === 'add') {
					let total = add(valueA, valueB);
					box1.val(total);
					printThenClear();
				}
				else if (mathFunctionToPerform === 'subtract') {
					let total = subtract(valueA, valueB);
					box1.val(total);
					printThenClear();
				}
				else if (mathFunctionToPerform === 'multiply') {
					let total = multiply(valueA, valueB);
					box1.val(total);
					printThenClear();
				}
				else if (mathFunctionToPerform === 'divide') {
					let total = divide(valueA, valueB);
					box1.val(total);
					printThenClear();
				}
			}
		})
	};

function printThenClear () {
	mathArr = [];
	mathFunctionToPerform = '';
};

function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function multiply (a,b) {
	return a * b;
}

function divide (a,b) {
	return a / b;
}

function square (a) {
	return a * a;
}

function squareRoot (a) {
	return Math.sqrt(a);
}