import {Component, OnInit} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {User} from '../entity/user';
import {Session} from '../../session';
import {UserService} from '../user.service';
import {Post} from '../entity/posts';
import {Comment} from '../entity/comment';

import {Router} from 'angular2/router';
@Component({
	selector:'user-post',
	template: `
	<div *ngIf="user" class="">
		<h2>{{user.name}}'s Posts:</h2>
		<ul *ngIf="posts" class="posts">
			<li *ngFor="#post of posts"   class="col-xs-12 col-md-4 "
				[ngClass]="{active: post===selectedPost }"
			>
				<h4 class="bg-primary" (click)="onSelectPost(post)"> {{post.title}}</h4>
				<div class="description">
					<p class="text-muted">
					{{post.body}}</p>
				</div>
				<span class="label label-default" (click)="onSelectPost(post)">Comments</span>
				<div class="comments" *ngIf="post===selectedPost">
					<h4>Comments</h4>
					<ul>
						<li *ngFor="#comment of selectedComments"  class="col-xs-11 ">
						 <p><label> Email: </label> {{comment.email}} <br>	
						 <label> Name:  </label> {{comment.name}}</p>
						 <div class="comment well">
						 	<p>
						 	{{comment.body}}</p>
						 </div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>`
})

export class UserPostComponent  implements OnInit{
	user: User;
	posts: Array <Post>;
	selectedPost:Post;
	selectedComments: Array <Comment>;
	constructor(private _session: Session, private _userService:UserService) { }
	ngOnInit() {
		this.updateUser(this._session.getUser());
		this._session.getUserObservable().subscribe(user=> this.updateUser(user[0]));
	}
	updateUser(user: User) {
		this.user = user;
		this.getPostsUser();
	}
	getPostsUser(){
		if(this.user){
			this._userService.getPostsByUserId(this.user.id).subscribe(posts=> this.posts=posts);
		}
	}
	onSelectPost(post){
		if (post === this.selectedPost) { 
			this.selectedPost = null;
			return 
		};
		this.selectedPost = post;
		this._userService.getCommentsByPost(this.selectedPost.id).subscribe(comments => this.selectedComments=comments);
	}
}

