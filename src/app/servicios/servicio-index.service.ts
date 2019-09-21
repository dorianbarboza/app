import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioIndexService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "http://vigilatuobra.qroo.gob.mx/Obras/";
    console.log('Service run');
  }

  get(){
   return this.http.get(this.url+'GetAll?EjercicioFiscal=2019');
 }
}
