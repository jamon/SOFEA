define(["ydmf", "sofea/view/aboutus", "sofea/component/MainLayout"],
        function(ydmf, tpl, layout) {
    var Controller = function() {};
    ydmf.util.extend(Controller, ydmf.Controller);
    ydmf.util.singleton(Controller);

    Controller.prototype.layout = null;
    Controller.prototype.target = null;
    Controller.prototype.pathParams = null;

    Controller.prototype.render = function() {
        this.layout = layout.getInstance();
        this.target = this.layout.newContentArea();
        $(this.target).html(tpl.Main());
        this.focus();
    };

    Controller.prototype.focus = function() {
        this.layout.selectContentArea(this.target);
    };

    return Controller;
});
