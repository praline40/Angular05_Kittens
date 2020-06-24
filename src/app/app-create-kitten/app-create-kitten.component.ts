import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Kitten} from '../models/kitten';
import {AppListKittenComponent} from '../app-list-kitten/app-list-kitten.component';
 
/**** Composant enfant de app-racine */

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.scss']
})
export class AppCreateKittenComponent implements OnInit {

  newKitten: Kitten;
   
  @Output()
  public getNewKitten:EventEmitter<Kitten> = new EventEmitter();

  public sendNewKittenToParent(){
    console.log(`${this.newKitten.name} has been added to the list of kittens to adopt` );
    this.getNewKitten.emit(this.newKitten);
  }
    
  constructor() { }

  ngOnInit(): void {
    this.newKitten = new Kitten();
  }
  

}
