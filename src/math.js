'use strict';

let output = $('#output');
let box1 = $('#text1');
let mathArr = [];
let boxValue;


$('.btn').click(function () {
	boxValue = parseInt(box1.val());
	mathArr.push(boxValue);
	box1.val('');
	console.log("mathArr", mathArr);
});

box1.keypress(function (mathFn) {
	if (event.which == 13) {
	}
});

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