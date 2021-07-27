import { Card, CardPicture, CardTitle, CardBody, CardParagraph } from './PokemonCard.styles';
import Link from 'next/link';
import Image from 'next/image';
import PokemonResponse from '../../../services/dtos/pokemonResponse';

const PokemonCard = ({ pokemon }: { pokemon: PokemonResponse }) => {
  return (
    <Card>
      <CardPicture>
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
      </CardPicture>
      <CardBody>
        <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`} passHref>
          <a>
            <CardTitle>{pokemon.name}</CardTitle>
          </a>
        </Link>
        <CardParagraph>
          {pokemon.types.map((pokeType) => pokeType.type.name).join(', ')}
        </CardParagraph>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
