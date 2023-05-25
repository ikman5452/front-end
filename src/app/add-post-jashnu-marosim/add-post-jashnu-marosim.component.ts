import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

const date = new Date();
@Component({
  selector: 'app-add-post-jashnu-marosim',
  templateUrl: './add-post-jashnu-marosim.component.html',
  styleUrls: ['./add-post-jashnu-marosim.component.scss']
})
export class AddPostJashnuMarosimComponent implements OnInit{


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
      category: "Jashnho",
      title: this.title,
      photoMalumot: this.photoMalumot,
      textMalumot: this.textMalumot,
      photoTarikh: this.photoTarikh,
      textTarikh: this.textTarikh,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: date,
    }


    this.authService.createPostJashnuMarosim({
      category: "Jashnho",
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
