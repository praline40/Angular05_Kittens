import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {Kitten} from '../models/kitten';



/* COLLECTION GLOBALE DES CHATONS */
@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.scss']
})
export class AppListKittenComponent implements OnInit, OnChanges {
   
  @Input() newKitten: Kitten; // reçu du parent app-racine qui l'a lui-même reçu de son autre fils app-create-kitten
  @Input() abandonKitten: Kitten; // reçu du parent app-racine qui l'a lui-même reçu de son autre fils app-user-kitten

  firstKitten: Kitten;
  kittensToAdopt: Kitten[]; // liste des kitten disponibles

  slides:any= [ [] ];
  chunk(arr, chunkSize) {
    let R= [];
    for (let i=0, len=arr.length; i<len; i+=chunkSize) {
      R.push(arr.slice(i, i+chunkSize));
    }
    return R;
  }

/*** kitten adopté (output) ***/ 
  adoptedKitten: Kitten; 
  @Output()
  public getAdoptedKitten:EventEmitter<Kitten> = new EventEmitter();
  public sendAdoptedKittenToParent(){
    console.log("ffffffffffffffffffffffffffff");
    //console.log(`${this.adoptedKitten.name} has been adopted`);
    this.getAdoptedKitten.emit(this.adoptedKitten);
    this.removeKitten(this.adoptedKitten);
    this.slides = this.chunk(this.kittensToAdopt, 3);
    console.log(this.slides);
  }

 

  constructor() {}

  ngOnInit(): void {
    this.adoptedKitten=new Kitten;
    this.kittensToAdopt = [];

  }

  /***Lors du changement d'un Input */
  ngOnChanges(changes) {
    if (changes['newKitten']) {
      console.log(`Ajout de ${this.newKitten.name} dans la liste des chatons à adopter.`)
      this.addKitten(this.newKitten);
    }
    if (changes['abandonKitten']) {
      console.log(`Ajout de ${this.abandonKitten.name} dans la liste des chatons à adopter.`)
      this.addKitten(this.abandonKitten);
    }
    this.slides = this.chunk(this.kittensToAdopt, 3);
  }
  
  public addKitten(kitten: Kitten){
    this.kittensToAdopt.push(kitten);
    this.logAllKittensToAdopt();
  }

  public logAllKittensToAdopt(){
    console.log('Liste des chatons à adopter:');
    for(let i=0; i<this.kittensToAdopt.length;i++){
      console.log(`${this.kittensToAdopt[i].name} -- ${this.kittensToAdopt[i].race} -- ${this.kittensToAdopt[i].birthday}`);
    }
  }

  public getKittens(){
    return this.kittensToAdopt; 
  }

  public getKitten(i){
     return this.kittensToAdopt[i]; 
  }

  public removeKitten(kitten: Kitten){
    let i;
    for(i=0; i<this.kittensToAdopt.length;i++){
      if(this.kittensToAdopt[i].name===kitten.name && this.kittensToAdopt[i].race===kitten.race && this.kittensToAdopt[i].birthday===kitten.birthday){
        this.kittensToAdopt.splice(i,1);
        break;
      }
    }
    this.logAllKittensToAdopt();
  }

 


}
