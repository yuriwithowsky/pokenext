import api from './api';
import PokemonResponse from './dtos/pokemonResponse';

class PokemonApi {
  static getPokemons = async () => {
    return await api.get('pokemon?limit=10&offset=200');
  };

  static getPokemonByName = async (name: string): Promise<PokemonResponse> => {
    var { data } = await api.get(`pokemon/${name}`);
    return data;
  };
}

export default PokemonApi;
