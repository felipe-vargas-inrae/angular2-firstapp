System.register([], function(exports_1) {
    var Utils;
    return {
        setters:[],
        execute: function() {
            Utils = (function () {
                function Utils() {
                }
                Utils.prototype.getRandItem = function (someArray) {
                    if (someArray == null || someArray == undefined) {
                        console.warn('Undefined array');
                        return null;
                    }
                    var item = someArray[Math.floor(Math.random() * someArray.length)];
                    return item;
                };
                return Utils;
            })();
            exports_1("Utils", Utils);
        }
    }
});
//# sourceMappingURL=utils.js.map