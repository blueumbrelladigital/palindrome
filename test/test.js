let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        it("should return false if not palindrome", function() {
            let nonPalindrome = new Phrase("dildo");
            assert(!nonPalindrome.palindrome());
        })
        it("should return true if palindrome", function() {
            let palindrome = new Phrase("racecar");
            assert(palindrome.palindrome());
        })
        it("should return true for mixed-case", function() {
            let mixedCase = new Phrase("Racecar");
            assert(mixedCase.palindrome());
        });
        it("should return true for punctuation", function() {
            let punctuation = new Phrase("Madam, I'm Adam.");
            assert(punctuation.palindrome());
        });
        it("should return false if empty", function() {
            let nullString = new Phrase("");
            assert(!nullString.palindrome());
        })
        it("should return false if null", function() {
            let nullString = new Phrase(null);
            assert(!nullString.palindrome());
        })
    })
    describe("#letters", function() {
        it("should return only letters", function() {
            let punctuation = new Phrase("Madam, I'm Adam.\n");
            assert.strictEqual(punctuation.letters(), "MadamImAdam");
        })
    })
})