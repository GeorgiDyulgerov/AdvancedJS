//TODO: Add extension method if you need
(function () {

    Function.prototype.extend = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}());
