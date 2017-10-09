"use strict";

var should = require("chai").should();
var foo = require("../src/foobar").foo;

describe("Function foo", function () {
	describe("with two number params", function () {
		it('should return product', function () {
			var result = foo(3, 4);

			result.should.be.a("number");
			result.should.be.equal(12);
		});
	});
});