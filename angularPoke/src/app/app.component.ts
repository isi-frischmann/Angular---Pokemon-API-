import { Component } from '@angular/core';
import { PokemonAPIService } from './pokemon-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  constructor(private _httpService: PokemonAPIService){
    
  }
}
