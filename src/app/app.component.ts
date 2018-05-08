import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './serverstate-table.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : any= [];
  title = 'app';
  Adata=[];

  // mydata=[{"id":11850093423,"cid":28665017870,"cid_date":"2018-05-08","gid":null,"symbol":"xrpusd","exchange":"bitfinex","price":"0.75","avg_execution_price":"0.0","side":"buy","type":"limit","timestamp":"1525766265.0","is_live":true,"is_cancelled":false,"is_hidden":false,"oco_order":null,"was_forced":false,"original_amount":"22.0","remaining_amount":"22.0","executed_amount":"0.0","src":"api"}];
  readonly ROOT_URL = 'http://phplaravel-68825-317593.cloudwaysapps.com/get_orders';
  post:Observable<Post[]>;

  constructor( private http:HttpClient ){
  }

  getdata(){
    this.post = this.http.get<Post[]>(this.ROOT_URL );

    console.log("test" + this.post);
    
   

  

}

}
