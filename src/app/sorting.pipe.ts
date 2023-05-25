import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "./models/Post";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(posts: any, category = ''): Post[] {
    if(!category){
      return posts
    } else {
      return posts.filter((posts: { category: string; }) => {
        return posts.category.toLowerCase() == category.toLowerCase()
      })
    }

  }

}
