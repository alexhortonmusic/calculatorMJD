'use strict';

describe('specs for calculator', function () {
	let a = 4;
	let b = 2;
	it('should have an add function', function () {
		expect(add).toBeDefined();
	})
	it('should add two numbers', function () {
		expect(add(a,b)).toBe(6);
	})
	it('should have a subtract function', function () {
		expect(subtract).toBeDefined();
	})
	it('should subtract one number from another', function () {
		expect(subtract(a,b)).toBe(2);
	})
	it ('should have a multiply function', function () {
		expect(multiply).toBeDefined();
	})
	it('should multiply two numbers', function () {
		expect(multiply(a,b)).toBe(8);
	})
	it ('should have a divide function', function () {
		expect(divide).toBeDefined();
	})
	it('should divide one number by another', function () {
		expect(divide(a,b)).toBe(2)
	})
	it ('should have a square function', function () {
		expect(square).toBeDefined();
	})
	it('should square a single number', function () {
		expect(square(a)).toBe(16);
	})
	it('should have a square root function', function () {
		expect(squareRoot).toBeDefined();
	})
	it('should find square root of a number', function () {
		expect(squareRoot(a)).toBe(2);
	})

})