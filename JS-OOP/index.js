// Prototypical Inheritance :
// This represents a simple example of prototypical inheritance in JS

// Exercise : Polymorphism

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

        this.render = function() {
    return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
 }
}

HtmlSelelectedElement.prototype = new HtmlElement();
HtmlSelelectedElement.prototype.constructor = HtmlElement

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlSelelectedElement.prototype = new HtmlElement();
HtmlSelelectedElement.prototype.constructor = HtmlElement


