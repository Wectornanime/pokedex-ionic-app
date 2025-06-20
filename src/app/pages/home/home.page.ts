import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { PokeApiService } from 'src/app/services/poke-api/poke-api.service';
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, PokemonCardComponent, NgFor, RouterLink, IonInfiniteScroll, IonInfiniteScrollContent],
})

export class HomePage implements OnInit {
  pokemonList: { name: string; url: string }[] = [];
  offset: number = 0;
  limit: number = 24;
  isLoading: boolean = false;

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(event?: any): void {
    if (this.isLoading) return;

    this.isLoading = true;

    this.pokeApi.getPokemonList({
      offset: this.offset,
      limit: this.limit
    }).subscribe(result => {
      this.pokemonList?.push(...result.results);
      this.offset += this.limit;

      this.isLoading = false;

      event?.target?.complete();
    })
  }
}
