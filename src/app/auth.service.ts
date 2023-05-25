import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  user: any;

  constructor(
    private http: HttpClient,
  ) { }

  // @ts-ignore
  public registerUser(user): Observable<any> {
    return this.http.post('http://localhost:3000/account/reg', {
      name: user.name,
      login: user.login,
      email: user.email,
      password: user.password,
    });
  }

  //@ts-ignore
  public authUser(user): Observable<any> {
    return this.http.post('http://localhost:3000/account/auth', {
      login: user.login,
      password: user.password
    });
  }

  public getToken(): string {
    return sessionStorage.getItem('token')!;
  }

  logout(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
    this.token = token;
  }


  public saveUser(user: any): void {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }


  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  //@ts-ignore
  public createPost(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTajhizot: post.photoTajhizot,
      textTajhizot: post.textTajhizot,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
      photoLocation: post.photoLocation,
      textLocation: post.textLocation
    }, {headers: headers});
  }


  //@ts-ignore
  public createPostMerosiAdabi(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textFaoliyat: post.textFaoliyat,
      photoAsarho: post.photoAsarho,
      textAsarho: post.textAsarho,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
    }, {headers: headers});
  }

  //@ts-ignore
  public createPostJashnuMarosim(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
    }, {headers: headers});
  }


  //@ts-ignore
  public createPostLiboshoiMilli(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
    }, {headers: headers});
  }



  //@ts-ignore
  public createPostTaomhoiSunnati(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
    }, {headers: headers});
  }




  //@ts-ignore
 public getPostById(id): Observable<any>{
    return this.http.get(`http://localhost:3000/post/${id}`)
 }




 //@ts-ignore
  public updatePost(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTajhizot: post.photoTajhizot,
      textTajhizot: post.textTajhizot,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      author: post.author,
      date: post.date,
      photoLocation: post.photoLocation,
      textLocation: post.textLocation
    }, {headers: headers})
  }



  //@ts-ignore
  public updatePostMerosiAdabi(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textFaoliyat: post.textFaoliyat,
      photoAsarho: post.photoAsarho,
      textAsarho: post.textAsarho,
      author: post.author,
      date: post.date,
    }, {headers: headers})
  }


  //@ts-ignore
  public updatePostJashnuMarosim(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      author: post.author,
      date: post.date,
    }, {headers: headers})
  }


  //@ts-ignore
  public updatePostLibosho(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      author: post.author,
      date: post.date,
    }, {headers: headers})
  }


  //@ts-ignore
  public updatePostAsbobhoiMusiqi(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      photoLocation: post.photoLocation,
      textLocation: post.textLocation,
      author: post.author,
      date: post.date,
    }, {headers: headers})
  }



  //@ts-ignore
  public updatePostTaomho(post, id: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })

    return this.http.put(`http://localhost:3000/post/${id}/edit`, {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      author: post.author,
      date: post.date,
    }, {headers: headers})
  }




  //@ts-ignore
  public createPostAsbobhoiMusiqi(post): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.post('http://localhost:3000/account/cabinet', {
      category: post.category,
      title: post.title,
      photoMalumot: post.photoMalumot,
      textMalumot: post.textMalumot,
      photoTarikh: post.photoTarikh,
      textTarikh: post.textTarikh,
      photoTamos: post.photoTamos,
      textTamos: post.textTamos,
      author: JSON.parse(sessionStorage.getItem('user')!).login,
      date: post.date,
      photoLocation: post.photoLocation,
      textLocation: post.textLocation
    }, {headers: headers});
  }



 //@ts-ignore
  deletePost(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.delete(`http://localhost:3000/post/${id}`, {headers: headers})
  }

  //@ts-ignore
  public getAllPosts(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }

  //@ts-ignore
  public getPostsByUser(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') || ''
    })
    return this.http.get('http://localhost:3000/user-posts');
  }

}

