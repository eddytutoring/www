"use strict";

var chai = require("chai");
var should = chai.should();
var bar = require("../src/foobar").bar;

describe("Function bar", function () {
	it("should return product", function (done) {
		bar(function (result) {
			result.should.be.a("object");
			done();
		});
	});
});
//# sourceMappingURL=barTest.js.map