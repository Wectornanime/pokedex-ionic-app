import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeCardComponent } from 'src/app/components/pokemon-type-card/pokemon-type-card.component';
import { PokemonStats, PokemonTypeSlot } from 'src/app/models/poke-api.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, PokemonTypeCardComponent, NgFor]
})
export class DetailsPage implements OnInit {
  pokemonName!: string;

  typeList: PokemonTypeSlot[] = [
    {
      slot: 0,
      type: {
        name: 'normal',
        url: ''
      }
    },
    {
      slot: 0,
      type: {
        name: 'fire',
        url: ''
      }
    }
  ];

  pokemonNumber: number = 4;
  imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif';
  imageAlt: string = 'imagem teste';
  about = {
    species: 'string',
    height: 'string',
    weight: 'string',
    abilities: 'a, b'
  };
  stats: PokemonStats[] = [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;
  }

}
