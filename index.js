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
        return this.processedContent() === this.processedContent().reverse();
    }
    
    this.processedContent = function processedContent() {
        return this.lower(this.content);   
    }
    
    this.lower = function lower(string) {
        return string.toLowerCase();
    }
    
    // returns all caps
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}

// defines TranslatedPhrase object
function TranslatedPhrase(content,translation) {
    this.content = content;
    this.translation = translation;
    
    // returns translation
    this.processedContent = function processedContent() {
        return this.lower(this.translation);
    }    
}

TranslatedPhrase.prototype = new Phrase();