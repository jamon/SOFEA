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
