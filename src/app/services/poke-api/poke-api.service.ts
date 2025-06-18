import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemonList(params = {offset: 0, limit: 20}) {
    const endpoint = `${env.pokeApiUrlBase}pokemon?offset=${params.offset}&limit=${params.limit}`
    return this.http.get(endpoint)
  }
}
