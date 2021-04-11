import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL="http://localhost:8080";
  }
   post(uri: string, payload: Object){
     return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
   }
}
