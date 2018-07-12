import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
 
  _url = '';
  constructor(private _http: HttpClient) { 
  }

  enroll(user: User) {
  	 //returns a reponse as an Observable
  	 return this._http.post<Any>(this._url, user);
  } 
}
