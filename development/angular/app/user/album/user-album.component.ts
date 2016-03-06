import {Component, OnInit} from 'angular2/core';
import {User} from "../entity/user";
import {Session} from "../../session";
import {Router} from "angular2/router";
import {Album} from "../entity/album";
import {Picture} from "../entity/picture";
import {UserService} from '../user.service';

@Component({
	selector:"user-album",
	template: `
	<div *ngIf="user"  >
		<h2>{{user.name}}'s Albums</h2>
		<ul *ngIf="albums" class="albums list-group">
			<li *ngFor="#album of albums"  class="list-group-item"
				
			 >

				<h3  [ngClass]="{'bg-primary': album===selectedAlbum }" (click)="onSelectAlbum(album)">
					{{album.title}}
				</h3>
				
				
				<div class="pictures" *ngIf="album===selectedAlbum">
					<span class="label label-danger" (click)="onSelectAlbum(post)">Close</span>
					<h4>Pictures</h4>
					<ul class="list-inline">
						<li *ngFor="#picture of selectedPictures" >
						 
						 	<img class="animated infinite " [ngClass]="{rotateIn: animateIt }"  src="{{picture.thumbnailUrl}}">

						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>`
})
export class UserAlbumComponent implements OnInit {
	user: User;
	albums: Array<Album>;
	selectedAlbum: Album;
	animateIt:Boolean = false;
	selectedPictures: Array <Picture>;

	constructor(private _session: Session, private _userService:UserService) { }

	ngOnInit() {
		this.updateUser(this._session.getUser());
		this._session.getUserObservable().subscribe(user=> this.updateUser(user[0]));
	}
	updateUser(user: User) {
		this.user = user;
		this.getAlbumsUser();
	}

	getAlbumsUser() {

		if (this.user) {
			this._userService.getAlbumsByUserId(this.user.id).subscribe(albums=> this.albums = albums);
		}
	}

	onSelectAlbum(album) {
		
		if (album === this.selectedAlbum) { 
			this.selectedAlbum = null;
			return; 
		}
		
		this._userService.getPicturesByAlbumId(album.id).subscribe(pictures => this.loadPictures(pictures,album));
	}
	
	loadPictures(pictures:Array<Picture>, album:Album ){
		this.selectedPictures = pictures;
		this.selectedAlbum = album;

		this.animateIt = false;
		var scope = this;

		
		var interval=setTimeout(function(){
			
			scope.animateIt = false;
			clearTimeout(interval);
		},5000);
	}
}