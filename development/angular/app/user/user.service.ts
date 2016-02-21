import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {User} from './entity/user';
import {Observable} from 'rxjs/Observable';
import {Post} from './entity/posts';
import {Comment} from './entity/comment.ts';
import {Album} from './entity/album';
import {Picture} from './entity/picture';

@Injectable()
export class UserService {
	private _url = 'http://jsonplaceholder.typicode.com/users';;
	private _urlPostsUser = 'http://jsonplaceholder.typicode.com/posts?userId=';
	private _urlComment = "http://jsonplaceholder.typicode.com/comments?postId=";
	private _urlAlbum= "http://jsonplaceholder.typicode.com/albums?userId=";
	private _urlPictures= "http://jsonplaceholder.typicode.com/photos?albumId=";
	
	constructor(private http: Http) { }

	getUsersWeb(){
		return this.http.get(this._url)
			.map(res => <User[]>res.json())
			.do(data=> console.log(data))
			.catch(this.handlerError );
	}
	getPostsByUserId(userId:number){
		return this.http.get(this._urlPostsUser + userId)
			.map(res => <Post[]>res.json())
			.do(data=> console.log(data))
			.catch(this.handlerError);
	}
	getCommentsByPost(postId:number){
		return this.http.get(this._urlComment + postId)
			.map(res => <Comment[]>res.json())
			.do(data=> console.log(data))
			.catch(this.handlerError);
	}
	getAlbumsByUserId(userId:number){
		return this.http.get(this._urlAlbum + userId)
			.map(res => <Album[]>res.json())
			.do(data=> console.log(data))
			.catch(this.handlerError);
	}
	getPicturesByAlbumId(albumId:number){
		return this.http.get(this._urlPictures + albumId)
			.map(res => <Picture[]>res.json())
			.do(data=> console.log(data))
			.catch(this.handlerError);
	}


	private handlerError (error:Response) {
		// in a real world app, we may send the server to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}