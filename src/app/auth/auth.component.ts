import { Component } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  login!: string;
  password!: string;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
  }
  ngOnInit(): void{
  }

  submit(): void {
    const user = {
      login: this.login,
      password: this.password,
    }

    if(!user.login) {
      this._flashMessagesService.show('Логини худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }

    else if(!user.password) {
      this._flashMessagesService.show('Пароли худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }

    this.authService.authUser({
      login: this.login,
      password: this.password}).subscribe( (data: { success: any; msg: string | undefined; token: any; user: any; }) => {
      if (!data.success) {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-danger', timeout: 4000 });
      } else {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/']);
        // this.authService.storeUser(data.token, data.user);
        this.authService.saveToken(data.token);
        this.authService.saveUser(data.user);
      }
    })
    console.log(user)
  }
}
