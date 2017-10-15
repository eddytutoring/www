let chai = require("chai");
let should = chai.should();
let bar = require("../src/js/foobar").bar;

describe("Function bar", () => {
	it("should return product", (done) => {
		bar( (result) => {
			result.should.be.a("object");
			done();
		});
	});
});