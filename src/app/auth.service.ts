import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
//import { Authorization } from '@angular/auth'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService
 {
    user=localStorage.getItem('un');
    private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>((localStorage.getItem('un')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }
  
  
   public login(username:string,password:string): Observable<any>
    {
      //const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)});
      var data= this.http.get<any>("http://localhost:3000/users");;
      return data;
      
    }
 }


