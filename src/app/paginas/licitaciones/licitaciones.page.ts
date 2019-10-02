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

  data: any[] = Array(20);

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

  loadData(event) {
      console.log('Cargando siguientes...');

      setTimeout(() => {

        if(this.data.length > 50){
          event.target.complete();
        //  this.infiniteScroll.disabled = true;
          return;
        }

        const nuevoArr = Array(20);
        this.data.push( ...nuevoArr);
        event.target.complete();

      },1000);


    }


}
