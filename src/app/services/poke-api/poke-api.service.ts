// poke-api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonListResponse } from 'src/app/models/poke-api.models';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  constructor(private http: HttpClient) {}

  getPokemonList(params = { offset: 0, limit: 20 }): Observable<PokemonListResponse> {
    const endpoint = `${env.pokeApiUrlBase}?offset=${params.offset}&limit=${params.limit}`;

    return this.http.get<PokemonListResponse>(endpoint);
  }

  getPokemonDetailsByPokemonName(params: { pokemonName: string }): Observable<PokemonDetails> {
    const endpoint = `${env.pokeApiUrlBase}/${params.pokemonName}`;

    return this.http.get<PokemonDetails>(endpoint);
  }
}
