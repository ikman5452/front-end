import { Component } from '@angular/core';
import {Post} from "../models/Post";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent {
  posts!: Post[];
  category: any

  constructor(
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.authService.getPostsByUser().subscribe(posts =>
      this.posts = posts,(err: any) => {}
    )
    console.log(this.posts)
  }
}
