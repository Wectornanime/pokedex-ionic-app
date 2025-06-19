import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { getColor } from 'src/app/utils/pokemon-type-color-map';

@Component({
  selector: 'app-pokemon-type-card',
  templateUrl: './pokemon-type-card.component.html',
  styleUrls: ['./pokemon-type-card.component.scss'],
  imports: [NgStyle]
})

export class PokemonTypeCardComponent  implements OnInit {
  @Input() type!: string;

  pokemonTypeColor!: string;

  constructor() { }

  ngOnInit() {
    this.pokemonTypeColor = getColor(this.type);
  }

}
