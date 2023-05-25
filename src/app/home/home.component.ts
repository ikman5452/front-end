import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Post} from "../models/Post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  posts!: Post[];
  category: any

  constructor(
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.authService.getAllPosts().subscribe(posts =>
      this.posts = posts,(err: any) => {}
    );
  }


  setCategory(category: any){
    this.category = category
  }

}
