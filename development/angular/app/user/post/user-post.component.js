System.register(['angular2/core', '../../session', '../user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, session_1, user_service_1;
    var UserPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserPostComponent = (function () {
                function UserPostComponent(_session, _userService) {
                    this._session = _session;
                    this._userService = _userService;
                }
                UserPostComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.updateUser(this._session.getUser());
                    this._session.getUserObservable().subscribe(function (user) { return _this.updateUser(user[0]); });
                };
                UserPostComponent.prototype.updateUser = function (user) {
                    this.user = user;
                    this.getPostsUser();
                };
                UserPostComponent.prototype.getPostsUser = function () {
                    var _this = this;
                    if (this.user) {
                        this._userService.getPostsByUserId(this.user.id).subscribe(function (posts) { return _this.posts = posts; });
                    }
                };
                UserPostComponent.prototype.onSelectPost = function (post) {
                    var _this = this;
                    if (post === this.selectedPost) {
                        this.selectedPost = null;
                        return;
                    }
                    ;
                    this.selectedPost = post;
                    this._userService.getCommentsByPost(this.selectedPost.id).subscribe(function (comments) { return _this.selectedComments = comments; });
                };
                UserPostComponent = __decorate([
                    core_1.Component({
                        selector: 'user-post',
                        template: "\n\t<div *ngIf=\"user\" class=\"\">\n\t\t<h2>{{user.name}}'s Posts:</h2>\n\t\t<ul *ngIf=\"posts\" class=\"posts\">\n\t\t\t<li *ngFor=\"#post of posts\"   class=\"col-xs-12 col-md-4 \"\n\t\t\t\t[ngClass]=\"{active: post===selectedPost }\"\n\t\t\t>\n\t\t\t\t<h4 class=\"bg-primary\" (click)=\"onSelectPost(post)\"> {{post.title}}</h4>\n\t\t\t\t<div class=\"description\">\n\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t{{post.body}}</p>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"label label-default\" (click)=\"onSelectPost(post)\">Comments</span>\n\t\t\t\t<div class=\"comments\" *ngIf=\"post===selectedPost\">\n\t\t\t\t\t<h4>Comments</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li *ngFor=\"#comment of selectedComments\"  class=\"col-xs-11 \">\n\t\t\t\t\t\t <p><label> Email: </label> {{comment.email}} <br>\t\n\t\t\t\t\t\t <label> Name:  </label> {{comment.name}}</p>\n\t\t\t\t\t\t <div class=\"comment well\">\n\t\t\t\t\t\t \t<p>\n\t\t\t\t\t\t \t{{comment.body}}</p>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [session_1.Session, user_service_1.UserService])
                ], UserPostComponent);
                return UserPostComponent;
            })();
            exports_1("UserPostComponent", UserPostComponent);
        }
    }
});
//# sourceMappingURL=user-post.component.js.map