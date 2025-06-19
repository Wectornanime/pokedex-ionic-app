import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonName!: string;

  number!: number;
  name!: string;
  imageUrl!: string;
  imageAlt!: string;

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit() {
    this.pokeApi.getPokemonDetailsByPokemonName({
      pokemonName: this.pokemonName
    }).subscribe(response => {
      this.name = response.name;
      this.number = response.id;
      this.imageUrl = response.sprites.front_default;
      this.imageAlt = `Imagem do pokemon ${this.name}`;
    })
  }
}
