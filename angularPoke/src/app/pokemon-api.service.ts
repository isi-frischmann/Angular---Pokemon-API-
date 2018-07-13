import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService { //this needs to match the import in the component.ts file

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.specPokemon();
  }

  getPokemon() {
    const bulbasur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    // console.log(bulbasur);
    bulbasur.subscribe(poke => {
      console.log("That's the POKEMON:", poke);
      console.log("NAME: ", poke['name']);
      console.log("Abilities: ", poke['abilities']);
    });
  }

  //  get all Pokemons with special Abilities
  specPokemon() {
    var count = 0;
    const allAbilities = this._http.get('https://pokeapi.co/api/v2/ability/4/');
    allAbilities.subscribe( pokemonAbility => {
      console.log("Pokemon Ability: ---------------", pokemonAbility);
      console.log("pokemon that have this ability: " + pokemonAbility['pokemon'] + 
      "The count how many pokemons have this ability: " + pokemonAbility['pokemon'].length);
    })
  }
}
