var chai = require('chai');
var should = chai.should();

// chai.config.truncateThreshold = 0;

chai.config.showDiff = false; // turn off reporter diff display
chai.config.truncateThreshold = 0; // disable truncating
chai.config.includeStack = true; // turn on stack trace


describe("objects", function () {
    it("should equal", function () {
        var a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };

        var b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});