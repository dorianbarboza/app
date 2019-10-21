import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Subscription, timer, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

   showSplash = false; // <-- show animation

  public appPages = [
  {
    title: 'Bienvenido',
    url: '/home',
    icon: 'home'
  },
  {
    title: 'Noticias',
    url: '/noticias',
    icon: 'paper'
  },
  {
    title: 'Listado de licitaciones',
    url: '/licitaciones',
    icon: 'logo-buffer'
  },
  {
    title: 'Crear solicitud de obra',
    url: 'form',
    icon: 'add-circle'
  },
  {
    title: 'Graficas',
    url: 'graficas',
    icon: 'podium'
  },
  {
    title: 'Prueba',
    url: 'prueba',
    icon: 'build'
  }
];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }
}
