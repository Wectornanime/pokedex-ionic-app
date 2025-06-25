import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';
import { PokemonTypeCardComponent } from '../pokemon-type-card/pokemon-type-card.component';
import { NgFor } from '@angular/common';
import { PokemonTypeSlot } from 'src/app/models/poke-api.models';
import { getColor } from 'src/app/utils/pokemon-type-color-map';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [PokemonTypeCardComponent, NgFor]
})

export class PokemonCardComponent implements OnInit {

  @Input() pokemonName!: string;

  number!: number;
  name!: string;
  imageUrl!: string;
  imageAlt!: string;
  typeList!: PokemonTypeSlot[]

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit() {
    this.pokeApi.getPokemonDetailsByPokemonName({
      pokemonName: this.pokemonName
    }).subscribe(response => {
      this.name = response.name;
      this.number = response.id;
      this.imageUrl = response.sprites.front_default;
      this.imageAlt = `Imagem do pokemon ${this.name}`;
      this.typeList = response.types;
      this.bgColor = getColor(this.typeList[0].type.name)
    })
  }

  @HostBinding('style.backgroundColor') bgColor = 'lightgray';
}
