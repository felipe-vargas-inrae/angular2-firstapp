System.register(['angular2/core', 'angular2/router', './user/detail/user-detail.component', './user/album/user-album.component', './user/post/user-post.component', './user/user.service', 'angular2/http', './session', './common/utils'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_detail_component_1, user_album_component_1, user_post_component_1, user_service_1, http_1, session_1, utils_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_detail_component_1_1) {
                user_detail_component_1 = user_detail_component_1_1;
            },
            function (user_album_component_1_1) {
                user_album_component_1 = user_album_component_1_1;
            },
            function (user_post_component_1_1) {
                user_post_component_1 = user_post_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService, router, _session) {
                    this._userService = _userService;
                    this.router = router;
                    this._session = _session;
                }
                AppComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsersWeb()
                        .subscribe(function (users) { return _this.takeAnUser(users); }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.takeAnUser = function (users) {
                    this.users = users;
                    this.selectedUser = this.util.getRandItem(users);
                    this._session.setUser(this.selectedUser);
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.util = new utils_1.Utils();
                    this.getUsers();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<div class=\"page-header\">\n    \t\t<h1> Welcome, <small *ngIf=\"selectedUser\">{{selectedUser.name}}</small></h1>\n    \t</div>\n\t\t<nav class=\"navbar navbar-fixed-top navbar-inverse\" >\n\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a class=\"navbar-brand\" href= \"#\" > Project BitGray</a >\n\t\t\t\t</div>\n\t\t\t\t<div id=\"\" class=\"\" >\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['UserDetail']\">Profile</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['Album']\">Album</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['Posts']\">Posts</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</nav>\n\t\t<router-outlet> </router-outlet>\n\t\t<!--<user-detail [user]=\"selectedUser\"></user-detail>-->\n\t  ",
                        directives: [router_1.ROUTER_DIRECTIVES, user_detail_component_1.UserDetailComponent],
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService, session_1.Session]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'UserDetail', component: user_detail_component_1.UserDetailComponent },
                        { path: '/album', name: 'Album', component: user_album_component_1.UserAlbumComponent },
                        { path: '/post', name: 'Posts', component: user_post_component_1.UserPostComponent }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, session_1.Session])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map