import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppRacineComponent } from './app-racine/app-racine.component'; 

const ROUTES: Routes = [
  { path: 'create', component: AppCreateKittenComponent}, 
  { path: '', component: AppRacineComponent}, // par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
