import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {Kitten} from '../models/kitten';

/** CHATONS DU USER */
@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.scss']
})
export class AppUserKittenComponent implements OnInit {

  @Input() newKitten: Kitten; // reçu du parent app-racine qui l'a lui-même reçu de son autre fils app-list-kitten
 
  myKittens: Kitten[]; // liste des kitten adoptés

/*** kitten abandonné (output) ***/ 
  abandonKitten: Kitten; 
  @Output()
  public getAbandonKitten:EventEmitter<Kitten> = new EventEmitter();
  public sendAbandonKittenToParent(){
    console.log(`${this.abandonKitten.name} has been abandonned`);
    this.getAbandonKitten.emit(this.abandonKitten);
    this.removeKitten(this.abandonKitten);
    this.slides = this.chunk(this.myKittens, 3);
  }

  slides:any= [ [] ];
  chunk(arr, chunkSize) {
    let R= [];
    for (let i=0, len=arr.length; i<len; i+=chunkSize) {
      R.push(arr.slice(i, i+chunkSize));
    }
    return R;
  }

  constructor() {}

  ngOnInit(): void {
  }

  /***Lors du changement d'un Input */
  ngOnChanges(changes) {
    if (changes['newKitten'] && this.newKitten) {
      this.addKitten(this.newKitten);
    }
    this.slides = this.chunk(this.myKittens, 3);
  }
  
  public addKitten(kitten: Kitten){
    this.myKittens.push(kitten);
  }

  public getKittens(){
    return this.myKittens; 
  }

  public getKitten(i){
     return this.myKittens[i]; 
  }

  public removeKitten(kitten: Kitten){
    let i;
    for(i=0; i<this.myKittens.length;i++){
      if(this.myKittens[i].name==kitten.name && this.myKittens[i].race==kitten.race && this.myKittens[i].birthday==kitten.birthday){
        this.myKittens.splice(i,1);
        break;
      }
    }
  }

}
