import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRacineComponent } from './app-racine/app-racine.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';
import { FormsModule } from '@angular/forms'; // pour utilser les formulaires en Angular, ainsi que ngModel, ngSubmit, ngForm

@NgModule({
  declarations: [
    AppComponent,
    AppRacineComponent,
    AppCreateKittenComponent,
    AppListKittenComponent,
    AppUserKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
