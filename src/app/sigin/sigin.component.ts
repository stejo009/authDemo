import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
logindata = "";
uname = "";
upass = "";

username;password;
  constructor(private http: HttpClient) { 
  
  }

  onLigin(){

    this.username = this.uname;
    this.password = this.upass;
    console.log("Username="+this.username+"password ="+this.password);
    
    const req = this.http.post('http://localhost:3000/user', {
      
      username:this.username,
      password:this.password
    
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
      console.log("submit button clicked");

      

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/user').subscribe((data) => {
    let json:any = data;
    this.logindata = json;
    console.log(this.logindata);
    });
  }

}
