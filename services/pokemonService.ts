import api from './api';
import PokemonResponse from './dtos/pokemonResponse';

class PokemonService {
  static getPokemons = async (): Promise<PokemonResponse[]> => {
    var { data } = await api.get('pokemon?limit=10');
    var results = data.results;

    var pokemons = await Promise.all<PokemonResponse>(
      results.map((pokemon: PokemonResponse) => {
        return PokemonService.getPokemonByName(pokemon.name);
      })
    );

    return pokemons;
  };

  static getPokemonByName = async (name: string): Promise<PokemonResponse> => {
    var { data } = await api.get(`pokemon/${name}`);
    return data;
  };
}

export default PokemonService;
