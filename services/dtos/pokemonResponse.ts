interface PokemonResponse {
  id: number;
  name: string;
  sprites: Sprites;
}

interface Sprites {
  front_default: string;
}

export default PokemonResponse;
