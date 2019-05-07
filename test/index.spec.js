const chai = require('chai');
const expect = chai.expect;
const cpfValidator = require("../lib");

describe("cpfvalidator lib", () => {
    describe("cpfvalidate", () => {
        it("Test1 should return true", () =>{
            expect(cpfValidator("87351732035")).to.equal(true);
        });
        it("Test2 should return false", () =>{
            expect(cpfValidator("08557720699")).to.equal(false);
        });
        it("Test3 should return true", () => {
            expect(cpfValidator("52660038040")).to.equal(true);
        });
        it("Test4 empty space should return false", () => {
            expect(cpfValidator("")).to.equal(false);
        })
        it("Test5 insuficient numbers should return false", () => {
            expect(cpfValidator("526600380")).to.equal(false);
        })
    })
})

