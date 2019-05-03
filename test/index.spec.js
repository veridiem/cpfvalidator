const chai = require('chai');
const expect = chai.expect;
const cpfValidator = require("../lib");

describe("cpfvalidator lib", () => {
    describe("cpfvalidate", () => {
        it("test1", () =>{
            expect(cpfValidator("08557720696")).to.equal(true);
        });
        it("test2", () =>{
            expect(cpfValidator("08557720699")).to.equal(false);
        });
        it("test3"), () => {
            
        }

    })
})

