define(["sofea/view/MainLayout"], function(tpl) {
    var Layout = function() {};

    Layout.prototype.target = null;
    Layout.getInstance = function() {
        if(typeof Layout.instance === "undefined") {
            Layout.instance = new Layout();
            Layout.instance.render();
        }
        return Layout.instance;
    };

    Layout.prototype.render = function() {
        this.target = $("body");
        this.target.append(tpl.Main());
    };

    Layout.prototype.newContentArea = function() {
        return $(tpl.NewContentArea()).appendTo($(".panelContainer", this.target)).addClass("_contentArea").find('.panelContent')[0];
    };

    Layout.prototype.selectContentArea = function(contentArea) {
        $("._contentArea.selected", this.target).removeClass("selected");
        $(contentArea).parent().addClass("selected");
    };

    return Layout;
});
