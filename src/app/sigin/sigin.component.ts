import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpErrorResponse } from '@angular/common/http';


import { Post } from '../serverstate-table.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
logindata = "";
uname = "";
upass = "";
headers;
username;password;
  constructor(private http: HttpClient) { 
  
  }

  // onLigin(){

  //   this.username = this.uname;
  //   this.password = this.upass;
  //   console.log("Username="+this.username+"password ="+this.password);
    
  //   const req = this.http.post('http://localhost:3000/user', {
      
  //     username:this.username,
  //     password:this.password
    
  //   })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log("Error occured");
  //       }
  //     );
  //     console.log("submit button clicked");
  // }

  
  readonly ROOT_URL = 'http://phplaravel-58256-500838.cloudwaysapps.com/all_orders';
 post:Observable<Post[]>;


  ngOnInit() {

    
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin','http://localhost:4200');

        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Access-Control-Allow-Headers', 'session-variable');
        headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

    
     this.http.get<Post[]>(this.ROOT_URL)
     .subscribe((data) => {
        let json:any = data;
        this.logindata = json.json();
        console.log(this.logindata);
        });

  }


}


// .subscribe((data) => {
//   let json:any = data;
//   this.logindata = json;
//   console.log(this.logindata);
//   });