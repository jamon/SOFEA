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
