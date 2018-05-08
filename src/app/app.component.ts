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
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin',"*");
    
    let options = new RequestOptions({headers: headers});

      this.http.get("https://jsonplaceholder.typicode.com/posts/1", options )
      .subscribe(data=>{
      console.log("test" + data);
        this.data = data.json();
        console.log("title :"+this.data.title);
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
  
}

}
1