if(!String.prototype.ucfirst) {
    String.prototype.ucfirst = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
}

if(!String.prototype.addSlashes) {
    String.prototype.addSlashes = function() {
        //no need to do (str+'') anymore because 'this' can only be a string
        return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    }
}
