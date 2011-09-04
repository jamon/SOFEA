/*
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/

 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * Contributor(s): 
 *   Jamon Terrell <jamon@sofea.net>
 *   Petar Strinic <petar@sofea.net>
*/
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
