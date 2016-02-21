System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this._url = 'http://jsonplaceholder.typicode.com/users';
                    this._urlPostsUser = 'http://jsonplaceholder.typicode.com/posts?userId=';
                    this._urlComment = "http://jsonplaceholder.typicode.com/comments?postId=";
                    this._urlAlbum = "http://jsonplaceholder.typicode.com/albums?userId=";
                    this._urlPictures = "http://jsonplaceholder.typicode.com/photos?albumId=";
                }
                ;
                UserService.prototype.getUsersWeb = function () {
                    return this.http.get(this._url)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handlerError);
                };
                UserService.prototype.getPostsByUserId = function (userId) {
                    return this.http.get(this._urlPostsUser + userId)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handlerError);
                };
                UserService.prototype.getCommentsByPost = function (postId) {
                    return this.http.get(this._urlComment + postId)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handlerError);
                };
                UserService.prototype.getAlbumsByUserId = function (userId) {
                    return this.http.get(this._urlAlbum + userId)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handlerError);
                };
                UserService.prototype.getPicturesByAlbumId = function (albumId) {
                    return this.http.get(this._urlPictures + albumId)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handlerError);
                };
                UserService.prototype.handlerError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map