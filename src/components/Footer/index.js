import { Container, Copyright } from './style';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Copyright>&copy; {year} Jacob Sullivan. All Rights Reserved.</Copyright>
    </Container>
  );
};

export default Footer;
