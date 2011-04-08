require.def(["ydmf/util"], function(util) {
    Controller = function() {};
    util.singleton(Controller);

    Controller.prototype.activate = function(pathParams) {
        typeof this.rendered === "undefined" ? this.rendered = true && this.render() : this.focus();
    };

    Controller.prototype.render = function() {
        this.focus();
    };

    Controller.prototype.focus = function() {
    };

    return Controller;
});
