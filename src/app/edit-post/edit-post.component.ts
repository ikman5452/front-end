import {Component, OnInit} from '@angular/core';
import {Post} from "../models/Post";
import {Observable, switchMap} from "rxjs";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FlashMessagesService} from "flash-messages-angular"


const date = new Date();

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  title!: string;
  photoMalumot!: string;
  textMalumot!: string;
  photoTarikh!: string;
  textTarikh!: string;
  photoTajhizot!: string;
  textTajhizot!: string;
  photoTamos!: string;
  textTamos!: string;
  photoLocation!: string;
  textLocation!: string;


  posts!: Post[];

  post$!: Observable<Post>;

  login: any

  constructor(
    private authService: AuthService,
    private routerActive: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (this.authService.isAuthenticated()){
      this.login = JSON.parse(sessionStorage.getItem("user")!).login
    }

    this.post$ = this.routerActive.params
      .pipe(switchMap((params: Params) => {
        return this.authService.getPostById(params['id'])
      }))
  }


  updatePost(id: any): void {

    const post = {
      category: "Hunarho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      photoTajhizot: this.photoTajhizot,
      textTajhizot: this.textTajhizot,
      photoTamos: this.photoTamos,
      textTamos: this.textTamos,
      photoLocation: this.photoLocation,
      textLocation: this.textLocation,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
    }
    this.authService.updatePost({
      category: "Hunarho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      photoTajhizot: this.photoTajhizot,
      textTajhizot: this.textTajhizot,
      photoTamos: this.photoTamos,
      textTamos: this.textTamos,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
      photoLocation: this.photoLocation,
      textLocation: this.textLocation
    }, id).subscribe( (data: { success: any; msg: string | undefined; }) => {
      if (!data.success) {
        this._flashMessagesService.show("Нашр иваз карда нашуд!",
          { cssClass: 'alert-danger', timeout: 4000 });
      } else {
        this._flashMessagesService.show("Нашр бомуваффақият иваз карда шуд.",
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['../'])
      }
    })
    console.log(post)
  }
}
