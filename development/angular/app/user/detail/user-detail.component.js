System.register(['angular2/core', '../../session'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, session_1;
    var UserDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            }],
        execute: function() {
            UserDetailComponent = (function () {
                function UserDetailComponent(_session) {
                    this._session = _session;
                }
                UserDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.updateUser(this._session.getUser());
                    this._session.getUserObservable().subscribe(function (user) { return _this.updateUser(user[0]); });
                };
                UserDetailComponent.prototype.updateUser = function (user) {
                    this.user = user;
                };
                UserDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'user-detail',
                        template: "\n\t<div *ngIf=\"user\" class=\"jumbotron\">\n\t\t<h2>{{user.name}}'s' details: </h2>\t\n\t\t<div>\n\t\t\t<label>Id: </label> {{user.id}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>Name: </label> \n\t\t\t{{user.name}}\n\t\t\t<!--<input [(ngModel)]=\"user.name\" placeholder=\"name\" />-->\n\t\t</div>\n\t\t<div>\n\t\t\t<label>Email: </label> {{user.email}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>Phone Number: </label> {{user.phone}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>Company: </label> {{user.company.name}}, <i>{{user.company.bs}}</i>\n\t\t</div>\n\t</div> \n\t" //,
                    }), 
                    __metadata('design:paramtypes', [session_1.Session])
                ], UserDetailComponent);
                return UserDetailComponent;
            })();
            exports_1("UserDetailComponent", UserDetailComponent);
        }
    }
});
//# sourceMappingURL=user-detail.component.js.map