interface PokemonResponse {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokemonType[];
}

interface Sprites {
  front_default: string;
}

interface PokemonType {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
}

export default PokemonResponse;
