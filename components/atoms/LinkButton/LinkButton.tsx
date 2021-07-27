import Link from 'next/link';
import ButtonContent from './LinkButton.styles';

const Button = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} passHref>
      <ButtonContent>{name}</ButtonContent>
    </Link>
  );
};

export default Button;
