import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
 private email : string | undefined;
  private apiUrl = 'http://localhost:9090/api/users';

  constructor(private http: HttpClient) { }

  // registerOwner(owner: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, owner, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   });
  // }
  addEmail(data:string){
    this.email=data;
  }
  getEmail( ){
    return this.email;
  }

  loginOwner(owner: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, owner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
