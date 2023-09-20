import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    name: "krillin",
    power: 1000,
    id: uuid(),
  },{
    id: uuid(),
    name:"Goku",
    power: 9999
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onAddCharacter(character: Character):void{
    const newCharacter: Character = {
      id : uuid(), ...character
    };

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number):void{
    this.characters.splice(index,1);
  }*/

  deleteCharacterById(id: string){
    console.log({id});

    this.characters = this.characters.filter(character => character.id!== id);
  }

  constructor() { }

}
