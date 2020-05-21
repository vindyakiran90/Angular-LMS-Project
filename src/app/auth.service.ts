import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  myURL = "http://localhost:8080/spring_lms";

  constructor(private http: HttpClient) { }

  register(userDetails){
    return this.http.post<any>(`${this.myURL}/addUser`, userDetails);
  }

  login(userDetails){
    return this.http.post<any>(`${this.myURL}/login`, userDetails);
  }

}
