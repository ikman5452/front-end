import {Component, OnInit} from '@angular/core';
import {Post} from "../models/Post";
import {Observable, switchMap} from "rxjs";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FlashMessagesService} from "flash-messages-angular";

@Component({
  selector: 'app-mavqeijoygirshavi',
  templateUrl: './mavqeijoygirshavi.component.html',
  styleUrls: ['./mavqeijoygirshavi.component.scss']
})
export class MavqeijoygirshaviComponent implements OnInit{


  posts!: Post[];

  post$!: Observable<Post>;
  login: any;
  role: any

  constructor(
    private authService: AuthService,
    private routerActive: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.login = JSON.parse(sessionStorage.getItem("user")!).login
    }


    this.post$ = this.routerActive.params
      .pipe(switchMap((params: Params) => {
        return this.authService.getPostById(params['id'])
      }))
  }

  deletePost(id: any): void {
    this.authService.deletePost(id).subscribe((data: { success: any; msg: string | undefined; }) => {
      if (!data.success) {
        this._flashMessagesService.show("Нашр нест карда нашуд!",
          {cssClass: 'alert-danger', timeout: 3000});
      } else {
        this._flashMessagesService.show("Нашр нест карда шуд.",
          {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/'])
      }
    })
  }

}
