System.register(['angular2/core', 'rxjs/Observable', 'rxjs/add/operator/share'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var Session;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            Session = (function () {
                function Session() {
                    var _this = this;
                    this.userObservable = new Observable_1.Observable(function (observer) {
                        _this.userObserver = observer;
                    }).share();
                    this._users = new Array();
                }
                Session.prototype.getUserObservable = function () {
                    return this.userObservable;
                    //return JSON.parse(localStorage.getItem('user'));
                };
                Session.prototype.setUser = function (user) {
                    this._users.push(user);
                    this.userObserver.next(this._users);
                };
                Session.prototype.getUser = function () {
                    if (this._users.length > 0)
                        return this._users[0];
                    return null;
                };
                Session = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Session);
                return Session;
            })();
            exports_1("Session", Session);
        }
    }
});
//# sourceMappingURL=session.js.map