// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Exercise : Prototypical Inheritance

function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelelectedElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelelectedElement.prototype = new HtmlElement();
HtmlSelelectedElement.prototype.constructor = HtmlElement;


