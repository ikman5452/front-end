import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

const date = new Date();
@Component({
  selector: 'app-add-post-merosi-adabi',
  templateUrl: './add-post-merosi-adabi.component.html',
  styleUrls: ['./add-post-merosi-adabi.component.scss']
})
export class AddPostMerosiAdabiComponent implements OnInit{

  title!: string;
  photoMalumot!: string;
  textFaoliyat!: string;
  photoAsarho!: string;
  textAsarho!: string;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPost(): void {

    const post = {
      category: "Meros",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textFaoliyat: this.textFaoliyat,
      photoAsarho: this.photoAsarho,
      textAsarho: this.textAsarho,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
    }


    this.authService.createPostMerosiAdabi({
      category: "Meros",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textFaoliyat: this.textFaoliyat,
      photoAsarho: this.photoAsarho,
      textAsarho: this.textAsarho,
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
