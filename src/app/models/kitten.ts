

export class Kitten {

  name: String;
  race: String;
  birthday: Date;
  photo: String;
  
   
  constructor(kitten?: Kitten){
    Object.assign(this, kitten);
  }
}
