import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Post } from './serverstate-table.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : any;
  title = 'app';
  

  // mydata=[{"id":11850093423,"cid":28665017870,"cid_date":"2018-05-08","gid":null,"symbol":"xrpusd","exchange":"bitfinex","price":"0.75","avg_execution_price":"0.0","side":"buy","type":"limit","timestamp":"1525766265.0","is_live":true,"is_cancelled":false,"is_hidden":false,"oco_order":null,"was_forced":false,"original_amount":"22.0","remaining_amount":"22.0","executed_amount":"0.0","src":"api"}];
  readonly ROOT_URL = 'c';
  post:Observable<Post[]>;

  constructor( private http:Http ){
  }

  getdata(){

    let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Access-Control-Allow-Headers', 'session-variable');
        headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
        headers.append('Access-Control-Allow-Origin', 'http://gh.nhamoigioi.xyz');
        headers.append('Access-Control-Allow-Credentials', 'true');

    
    let options = new RequestOptions({headers: headers});
    

      this.http.get("http://phplaravel-68825-317593.cloudwaysapps.com/testApi", options)
      .subscribe(data=>{
      console.log("test" + data);
        // this.data = data.json();
        console.log("title 1:"+this.data[0]);
        console.log("title 2:"+this.data[2]);
        console.log("title 3:"+this.data[2]); 
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
  
}

}


// 