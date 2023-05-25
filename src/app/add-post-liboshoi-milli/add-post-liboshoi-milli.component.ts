import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

const date = new Date();
@Component({
  selector: 'app-add-post-liboshoi-milli',
  templateUrl: './add-post-liboshoi-milli.component.html',
  styleUrls: ['./add-post-liboshoi-milli.component.scss']
})
export class AddPostLiboshoiMilliComponent implements OnInit {

  title!: string;
  photoMalumot!: string;
  textMalumot!: string;
  photoTarikh!: string;
  textTarikh!: string;
  photoTamos!: string;
  textTamos!: string;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPost(): void {

    const post = {
      category: "Libosho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      photoTamos: this.photoTamos,
      textTamos: this.textTamos,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
    }


    this.authService.createPostLiboshoiMilli({
      category: "Libosho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      photoTamos: this.photoTamos,
      textTamos: this.textTamos,
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
