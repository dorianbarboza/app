import { Component, OnInit } from '@angular/core';
import { ServicioIndexService } from '../../servicios/servicio-index.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  arreglo: any[] = [];

  constructor(private _servicio: ServicioIndexService,
              public alertController: AlertController) {
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
