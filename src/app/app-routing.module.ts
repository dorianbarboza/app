import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'noticias', loadChildren: './paginas/noticias/noticias.module#NoticiasPageModule' },
  { path: 'licitaciones', loadChildren: './paginas/licitaciones/licitaciones.module#LicitacionesPageModule' },
  { path: 'solicitud', loadChildren: './paginas/solicitud/solicitud.module#SolicitudPageModule' },
  { path: 'form', loadChildren: './paginas/form/form.module#FormPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
