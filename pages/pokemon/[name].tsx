import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PokemonResponse from '../../services/dtos/pokemonResponse';
import PokemonService from '../../services/pokemonService';
import styles from '../../styles/Home.module.css';

export default function PokemonDetail({ pokemon }: { pokemon: PokemonResponse }) {
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <Head>
        <title>{pokemon.name}</title>
      </Head>

      <main className={styles.main}>
        <Image src={pokemon.sprites.front_default} width={100} height={100} />
        <h1 className={styles.title}>{pokemon.name}</h1>

        <p className={styles.description}>
          {pokemon.types.map((pokeType) => pokeType.type.name).join(', ')}
        </p>
      </main>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = await PokemonService.getPokemons();

  const paths = pokemons.map((pokemon: PokemonResponse) => ({
    params: { name: pokemon.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context);
  const name = context.params?.name as string;

  const pokemon = await PokemonService.getPokemonByName(name);

  return {
    props: { name, pokemon },
  };
};
