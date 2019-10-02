import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LicitacionesPage } from './licitaciones.page';

import { PipesModule } from '../../pipes/pipes.module'

const routes: Routes = [
  {
    path: '',
    component: LicitacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [LicitacionesPage]
})
export class LicitacionesPageModule {}
