import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import PokemonResponse from '../services/dtos/pokemonResponse';
import PokemonService from '../services/pokemonService';
import styles from '../styles/Home.module.css';
import { PokemonCard } from '../components/organisms';

export default function PokemonList({ pokemons }: { pokemons: PokemonResponse[] }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Pokemons</h1>

        <div className={styles.grid}>
          {pokemons.map((pokemon: PokemonResponse) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const pokemons = await PokemonService.getPokemons();

  return {
    props: { pokemons },
  };
};
