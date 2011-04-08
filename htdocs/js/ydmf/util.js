require.def("ydmf/util", function() {
    return {
        extend: function(child, parent) {
            var temp = function() {};
            temp.prototype = parent.prototype;
            child.superClass_ = parent.prototype;
            child.prototype = new temp();
            child.prototype.constructor = child;
        },
        loadCss: function(path) {
            var link = document.createElement('link');
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = path;

            document.getElementsByTagName("head")[0].appendChild(link);
        },
        singleton: function(Cls) {
            Cls.getInstance = function() {
                return typeof Cls.instance === 'undefined' ? Cls.instance = new Cls : Cls.instance;
            }
        }
    };
});
