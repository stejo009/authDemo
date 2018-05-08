import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerstateTableService {
  logindata :any= [];
  constructor(private http: HttpClient) { 
 
   this.logindata = this.http.get('http://localhost:3000/user')
  }
}
