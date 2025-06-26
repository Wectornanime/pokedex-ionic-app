import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokeApiService } from './poke-api.service';
import { PokemonDetails, PokemonListResponse } from 'src/app/models/poke-api.models';

describe('PokeApiService', () => {
  let httpMock: HttpTestingController;
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeApiService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch pokemon data', () => {
    const mockResponse: PokemonDetails = {
      id: 25,
      name: 'pikachu',
      abilities: [
        {
          ability: {
            name: 'static',
            url: 'https://pokeapi.co/api/v2/ability/9/'
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: 'lightning - rod',
            url: 'https://pokeapi.co/api/v2/ability/31/'
          },
          is_hidden: true,
          slot: 3
        }
      ],
      height: 4,
      weight: 60,
      types: [
        {
          slot: 1,
          type: {
            name: 'electric',
            url: 'https://pokeapi.co/api/v2/type/13/'
          }
        }
      ],
      species: {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
      },
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/'
          }
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/'
          }
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/'
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/'
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/'
          }
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/'
          }
        }
      ],
      base_experience: 112,
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        other: {
          dream_world: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
          },
          showdown: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
          },
        }
      }
    }

    service.getPokemonDetailsByPokemonName({ pokemonName: 'pikachu' }).subscribe(data => {
      // expect(data.name).toEqual('pikachu');
      // expect(data.id).toEqual(25);
      // expect(data.abilities.length).toBe(2);
      // expect(data.abilities[0].ability.name).toEqual('static');

      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });

  it('should fetch pokemon list', () => {
    const mockResponse: PokemonListResponse = {
      count: 1302,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=3&limit=3',
      previous: null,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/'
        },
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon/3/'
        }
      ]
    };

    const limit = 3;

    service.getPokemonList({ offset: 0, limit }).subscribe(data => {
      expect(data).toEqual(mockResponse);
      expect(data.results.length).toBe(limit);
    });

    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  })
});
