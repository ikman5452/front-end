import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit{
  name!: string;
  login!: string;
  email!: string;
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
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }
    if(!user.name) {
      this._flashMessagesService.show('Номи худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }
    else if(!user.login) {
      this._flashMessagesService.show('Логини худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }
    else if(!user.email) {
      this._flashMessagesService.show('Почтаи электронии худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }
    else if(!user.password) {
      this._flashMessagesService.show('Пароли худро дохил кунед!',
        { cssClass: 'alert-danger', timeout: 3000 });
    }

    this.authService.registerUser(
      {name: this.name,
        login: this.login,
        email: this.email,
        password: this.password,
      }).subscribe( (data: { success: any; msg: string | undefined; }) => {
          if (!data.success) {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/reg'])
      } else {
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/auth'])
      }
    })
    console.log(user)
  }
}
