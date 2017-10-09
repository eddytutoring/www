let should = require("chai").should();
let foo = require("../src/foobar").foo;

describe("Function foo", () => {
	describe("with two number params", () => {
		it('should return product', () => {
			let result = foo(3,4);

			result.should.be.a("number");
			result.should.be.equal(12);
		});
	});
});