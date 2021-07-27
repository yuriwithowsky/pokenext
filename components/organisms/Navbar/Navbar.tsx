import LinkButton from '../../atoms/LinkButton/LinkButton';
import NavbarContainer from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <LinkButton href="/" name="Página inicial" />
    </NavbarContainer>
  );
};

export default Navbar;
