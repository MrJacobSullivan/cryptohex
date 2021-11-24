import { Container, Main } from './style';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
