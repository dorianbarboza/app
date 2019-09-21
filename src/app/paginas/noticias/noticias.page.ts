import { Component, OnInit } from '@angular/core';
import { ServicioIndexService } from '../../servicios/servicio-index.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  arreglo: any[] = [];

  constructor(private _servicio: ServicioIndexService) {
    this._servicio.get()
   .subscribe( (data: any) => {
     console.log(data);
     this.arreglo = data;
   })
   }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
