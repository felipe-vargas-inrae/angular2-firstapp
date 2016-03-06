System.register(['angular2/core', "../../session", '../user.service'], function(exports_1) {
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
    var UserAlbumComponent;
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
            UserAlbumComponent = (function () {
                function UserAlbumComponent(_session, _userService) {
                    this._session = _session;
                    this._userService = _userService;
                    this.animateIt = false;
                }
                UserAlbumComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.updateUser(this._session.getUser());
                    this._session.getUserObservable().subscribe(function (user) { return _this.updateUser(user[0]); });
                };
                UserAlbumComponent.prototype.updateUser = function (user) {
                    this.user = user;
                    this.getAlbumsUser();
                };
                UserAlbumComponent.prototype.getAlbumsUser = function () {
                    var _this = this;
                    if (this.user) {
                        this._userService.getAlbumsByUserId(this.user.id).subscribe(function (albums) { return _this.albums = albums; });
                    }
                };
                UserAlbumComponent.prototype.onSelectAlbum = function (album) {
                    var _this = this;
                    if (album === this.selectedAlbum) {
                        this.selectedAlbum = null;
                        return;
                    }
                    this._userService.getPicturesByAlbumId(album.id).subscribe(function (pictures) { return _this.loadPictures(pictures, album); });
                };
                UserAlbumComponent.prototype.loadPictures = function (pictures, album) {
                    this.selectedPictures = pictures;
                    this.selectedAlbum = album;
                    this.animateIt = false;
                    var scope = this;
                    var interval = setTimeout(function () {
                        scope.animateIt = false;
                        clearTimeout(interval);
                    }, 5000);
                };
                UserAlbumComponent = __decorate([
                    core_1.Component({
                        selector: "user-album",
                        template: "\n\t<div *ngIf=\"user\"  >\n\t\t<h2>{{user.name}}'s Albums</h2>\n\t\t<ul *ngIf=\"albums\" class=\"albums list-group\">\n\t\t\t<li *ngFor=\"#album of albums\"  class=\"list-group-item\"\n\t\t\t\t\n\t\t\t >\n\n\t\t\t\t<h3  [ngClass]=\"{'bg-primary': album===selectedAlbum }\" (click)=\"onSelectAlbum(album)\">\n\t\t\t\t\t{{album.title}}\n\t\t\t\t</h3>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class=\"pictures\" *ngIf=\"album===selectedAlbum\">\n\t\t\t\t\t<span class=\"label label-danger\" (click)=\"onSelectAlbum(post)\">Close</span>\n\t\t\t\t\t<h4>Pictures</h4>\n\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t<li *ngFor=\"#picture of selectedPictures\" >\n\t\t\t\t\t\t \n\t\t\t\t\t\t \t<img class=\"animated infinite \" [ngClass]=\"{rotateIn: animateIt }\"  src=\"{{picture.thumbnailUrl}}\">\n\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [session_1.Session, user_service_1.UserService])
                ], UserAlbumComponent);
                return UserAlbumComponent;
            })();
            exports_1("UserAlbumComponent", UserAlbumComponent);
        }
    }
});
//# sourceMappingURL=user-album.component.js.map