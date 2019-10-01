import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioIndexService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "http://127.0.0.1:2145/RestVTO/index.php/Vigila_WS/";
    console.log('Service run');
  }

  get(){
   return this.http.get(this.url+'getvigila/');
 }
}
