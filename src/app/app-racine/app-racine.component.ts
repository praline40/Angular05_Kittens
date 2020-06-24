import { Component, OnInit } from '@angular/core';
import {Kitten} from '../models/kitten';

/**********   COMPOSANT PARENT DE TOUS LES AUTRES   ********* */
@Component({
  selector: 'app-app-racine',
  templateUrl: './app-racine.component.html',
  styleUrls: ['./app-racine.component.scss']
})
export class AppRacineComponent implements OnInit {
   
  newKitten: Kitten; // reçu de l'enfant app-create-kitten
  adoptedKitten: Kitten;
  abandonKitten: Kitten;

  constructor() {}

  ngOnInit(): void {
  }

  onReceiveNewKitten($event) {
     this.newKitten = {...$event};
  }

  onReceiveAdoptedKitten($event) {
    this.adoptedKitten = {...$event};
  }

  onReceiveAbandonKitten($event) {
    this.abandonKitten = {...$event};
  }



}
