import { Navbar, Footer } from '../organisms';
import Head from 'next/head';

interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
