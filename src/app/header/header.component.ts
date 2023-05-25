import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private _flashMessagesService: FlashMessagesService,
    public authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this._flashMessagesService.show('Шумо аз ҳуҷраи шахсӣ баромадед!',
      { cssClass: 'alert-danger', timeout: 3000 });
    this.router.navigate(['/auth'])
  }
}
