import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  apiurl="https://api.npoint.io/f0c180f22dab09f9cd42";
  homeapi():Observable<any>{
    return this.http.get(`${this.apiurl}`);
  }

}