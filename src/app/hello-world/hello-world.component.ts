import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  data = '';
  error: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getHelloWorld().subscribe((data: any) => {
      this.data = data;
    },
    error => {
      console.log(error);
      this.error = error;
    });
  }

}
