import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PokemonListResponse } from 'src/app/models/poke-api.models';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, PokemonCardComponent, NgFor, NgIf],
})

export class HomePage implements OnInit {
  pokemonList: PokemonListResponse | null = null;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApi.getPokemonList({
      offset: 0, limit: 24
    }).subscribe(result => this.pokemonList = result)
  }
}
