import {User} from './user/entity/user';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class Session{
	userObservable: Observable<Array<User>>;
	private userObserver: any;
	private _users: Array<User>;
	constructor(){
		this.userObservable = new Observable(observer => { 
			this.userObserver = observer;

		}).share();
		this._users = new Array<User>();
	}
	getUserObservable(): Observable<Array<User>> {
		return this.userObservable;
		//return JSON.parse(localStorage.getItem('user'));
	}
	setUser(user:User){
		this._users.push(user);
		this.userObserver.next(this._users);
	}

	getUser():User{
		if(this._users.length>0) return this._users[0];
		return null;
	}	
}