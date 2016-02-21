import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

/*Entity*/
import {User} from './user/entity/user';

/*Components*/
import {UserDetailComponent} from './user/detail/user-detail.component';
import {UserAlbumComponent} from './user/album/user-album.component';
import {UserPostComponent} from './user/post/user-post.component';

/*Services*/
import {UserService} from './user/user.service';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Session} from './session'
import {Utils} from './common/utils';


@Component({
    selector: 'my-app',
    template: `
    	<div class="page-header">
    		<h1> Welcome, <small *ngIf="selectedUser">{{selectedUser.name}}</small></h1>
    	</div>
		<nav class="navbar navbar-fixed-top navbar-inverse" >

			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href= "#" > Project BitGray</a >
				</div>
				<div id="" class="" >
					<ul class="nav navbar-nav">
						<li>
							<a [routerLink]="['UserDetail']">Profile</a>
						</li>
						<li>
							<a [routerLink]="['Album']">Album</a>
						</li>
						<li>
							<a [routerLink]="['Posts']">Posts</a>
						</li>
					</ul>
				</div>
			</div>
			
		</nav>
		<router-outlet> </router-outlet>
		<!--<user-detail [user]="selectedUser"></user-detail>-->
	  `,
	directives: [ROUTER_DIRECTIVES, UserDetailComponent],
	providers: [HTTP_PROVIDERS, UserService, Session]
})
@RouteConfig([
	{ path: '/', name: 'UserDetail', component: UserDetailComponent },
	{ path: '/album', name: 'Album', component: UserAlbumComponent },
	{ path: '/post', name: 'Posts', component: UserPostComponent }
])
export class AppComponent implements OnInit {
	selectedUser: User;
	users: User[];
	util: Utils;

	errorMessage: string;
	constructor(private _userService: UserService, private router: Router, private _session: Session) { }
	getUsers() {
		this._userService.getUsersWeb()
			.subscribe(
			users => this.takeAnUser(users),
			error => this.errorMessage = <any>error);
	}
	takeAnUser(users) {

		this.users = users;
		this.selectedUser = this.util.getRandItem(users);
		this._session.setUser(this.selectedUser);
	}
	ngOnInit() {
		this.util = new Utils();
		this.getUsers();

	}
}