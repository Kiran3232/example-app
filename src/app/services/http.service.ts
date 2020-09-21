import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getHelloWorld() {
    return this.http.get('https://dashboardsdemo.azurewebsites.net/api/Hello/StringHello');
  }

}
