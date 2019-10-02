import { Component, OnInit } from '@angular/core';
import { ServicioIndexService } from '../../servicios/servicio-index.service';


@Component({
  selector: 'app-licitaciones',
  templateUrl: './licitaciones.page.html',
  styleUrls: ['./licitaciones.page.scss'],
})
export class LicitacionesPage implements OnInit {

  textoBuscar = '';

  datos: any[] = [];

  constructor(private _servicio: ServicioIndexService) {
    this._servicio.get()
    .subscribe( (datos: any) => {
      console.log(datos);
      this.datos = datos;
    })
   }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  buscar( event ){
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }


}
