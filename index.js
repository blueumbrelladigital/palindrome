module.exports = Phrase;

String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
    if (!this.match(/\S/g)) {
        return true;
    }
}

Array.prototype.last = function() {
    return this.slice(-1);
}

// defines Phrase object
function Phrase(content) {
    this.content = content;
    
    // returns true if palindrome, false if not
    this.palindrome = function palindrome() {
        if (this.processedContent()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }
    
    // pass this.content to lower()
    this.processedContent = function processedContent() {
        if (this.content === null) {
            return "";
        } else {
            return this.lower(this.letters()); 
        }
    }
    
    // returns all lowercase
    this.lower = function lower(string) {
        return string.toLowerCase();
    }
    
    // returns all caps
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
    
    // returns only letters
    this.letters = function letters() {
        return (this.content.match(/[a-zA-z]/g) || []).join("");
    }
}

// defines TranslatedPhrase object
function TranslatedPhrase(content,translation) {
    this.content = content;
    this.translation = translation;
    
    // pass this.translation to lower()
    this.processedContent = function processedContent() {
        return this.lower(this.translation);
    }    
}

TranslatedPhrase.prototype = new Phrase();