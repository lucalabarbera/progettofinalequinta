import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  data: any;
  loading: boolean;
  o :Observable<Object>;
  constructor(public http: HttpClient){}

  makeRequest(): void {
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }

   getData = (d : Object) =>
   {
     this.data = d;
     this.loading = false;
   }

  ngOnInit(): void {
  }

}
