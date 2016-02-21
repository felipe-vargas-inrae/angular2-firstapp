import {Component, OnInit} from 'angular2/core';
import {User} from '../entity/user';
import {Session} from '../../session';

@Component({
	selector: 'user-detail',
	template:`
	<div *ngIf="user" class="jumbotron">
		<h2>{{user.name}}'s' details: </h2>	
		<div>
			<label>Id: </label> {{user.id}}
		</div>
		<div>
			<label>Name: </label> 
			{{user.name}}
			<!--<input [(ngModel)]="user.name" placeholder="name" />-->
		</div>
		<div>
			<label>Email: </label> {{user.email}}
		</div>
		<div>
			<label>Phone Number: </label> {{user.phone}}
		</div>
		<div>
			<label>Company: </label> {{user.company.name}}, <i>{{user.company.bs}}</i>
		</div>
	</div> 
	`//,

	/*providers:[Session]*/
})

export class UserDetailComponent implements OnInit{
	user: User;
	
	constructor(private _session:Session){}

	ngOnInit(){
		this.updateUser(this._session.getUser());
		this._session.getUserObservable().subscribe(user=>this.updateUser(user[0]));

	}

	updateUser(user:User){
		this.user = user;
	}

}