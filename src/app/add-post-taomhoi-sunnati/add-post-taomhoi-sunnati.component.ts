import { Component } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

const date = new Date();
@Component({
  selector: 'app-add-post-taomhoi-sunnati',
  templateUrl: './add-post-taomhoi-sunnati.component.html',
  styleUrls: ['./add-post-taomhoi-sunnati.component.scss']
})
export class AddPostTaomhoiSunnatiComponent {


  title!: string;
  photoMalumot!: string;
  textMalumot!: string;
  photoTarikh!: string;
  textTarikh!: string;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPost(): void {

    const post = {
      category: "Hurokho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
    }


    this.authService.createPostTaomhoiSunnati({
      category: "Hurokho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,

    }).subscribe( (data: { success: any; msg: string | undefined; }) => {
      if (!data.success) {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-danger', timeout: 4000 });
      } else {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/'])
      }
    })
    console.log(post)
  }

}
