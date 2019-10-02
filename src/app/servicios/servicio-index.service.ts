import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioIndexService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "http://192.168.43.117:2145/RestVTO/index.php/Vigila_WS/";
    console.log('Service run');
  }

  get(){
   return this.http.get(this.url+'getvigila/');
 }
}
