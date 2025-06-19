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
  abilities: PokemonAbilities[];
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonTypeSlot[];
  species: {
    name: string;
    url: string;
  };
  stats: PokemonStats[];
  base_experience: number,
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

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
  },
  is_hidden: boolean;
  slot: number;
}
