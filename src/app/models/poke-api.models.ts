export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonTypeSlot[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
        [key: string]: string;
      },
      showdown: {
        front_default: string;
        [key: string]: string;
      },
      [key: string]: any;
    }
    [key: string]: any;
  };
}

export interface PokemonTypeSlot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
