import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  postURL = 'https://jsonplaceholder.typicode.com/posts';
  paisURL = 'https://restcountries.com/v3.1/all';
  perURL = 'https://restcountries.com/v3.1/name/peru';
  apiURL = 'http://localhost:3000/api';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }) 
  }

  constructor(private httpClient:HttpClient) { }

  getPost(){
    return this.httpClient.get(this.postURL);
  }

  getPais(){
    return this.httpClient.get(this.paisURL);
  }

  getPeru(){
    return this.httpClient.get(this.perURL);
  }

  getProductos(){
    return this.httpClient.get(this.apiURL+'/productos');
  }
}
