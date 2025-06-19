import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeCardComponent } from 'src/app/components/pokemon-type-card/pokemon-type-card.component';
import { PokemonAbilities, PokemonStats, PokemonTypeSlot } from 'src/app/models/poke-api.models';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';
import { getColor } from 'src/app/utils/pokemon-type-color-map';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, PokemonTypeCardComponent, NgFor, NgStyle]
})
export class DetailsPage implements OnInit {
  pokemonName!: string;
  pokemonTypeColor!: string;

  typeList!: PokemonTypeSlot[];
  pokemonNumber!: number;
  imageUrl!: string;
  imageAlt!: string;
  about!: {
    species: string;
    height: number;
    weight: number;
  };

  abilityList!: PokemonAbilities[];
  stats!: PokemonStats[]
  base_experience!: number;

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeApiService
  ) { }

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;

    this.pokeApi.getPokemonDetailsByPokemonName({
      pokemonName: this.route.snapshot.paramMap.get('name')!
    }).subscribe(response => {
      this.pokemonNumber = response.id;

      this.abilityList = response.ability,

      this.about = {
        height: response.height,
        species: response.species.name,
        weight: response.weight
      };

      this.stats = response.stats;
      this.base_experience = response.base_experience;

      this.typeList = response.types;

      this.imageUrl = response.sprites.other.showdown.front_default;
      this.imageAlt = `Imagem animada do pokémon ${this.pokemonName}`;

      this.pokemonTypeColor = getColor(this.typeList[0].type.name);
    })
  }

}
