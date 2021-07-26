import { Navbar } from '../organisms';

interface ILayoutProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ title, children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
