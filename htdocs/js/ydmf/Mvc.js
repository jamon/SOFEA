require.def(["ydmf/util"], function(util) {
    var Mvc = function() {
        this.config = {
            controllerPath: "app/",
            defaultController: "index",
            notFoundController: "notfound"
        };
    };
    Mvc.prototype.constructor = Mvc;
    util.singleton(Mvc);

    Mvc.prototype.start = function(controllerPath, registerHashChange) {
        this.config.controllerPath = controllerPath;
        if(registerHashChange !== false) this.bindHashChange();

    };

    Mvc.prototype.bindHashChange = function() {
        var that = this;
        require(["lib/hashchange.js"], function() {
            $(window).hashchange(function() {
                that.hashChange(window.location.hash);
            }).hashchange();
        });
    };

    Mvc.prototype.hashChange = function(fragment) {
        var path = fragment.replace(/^#?\/?/, '').split('/');
        var controllerName = path[0] !== "" ? path[0] : this.config.defaultController;
        var pathParams = path.length > 1 ? path.slice(1) : [];

        require([this.config.controllerPath + controllerName], function(controllerClass) {
            return controllerClass !== "undefined" ? controllerClass.getInstance(pathParams).activate(pathParams) : this.hashChange(this.config.notFoundController);
        });
    };

    return Mvc;
});
