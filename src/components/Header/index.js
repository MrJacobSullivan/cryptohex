import { Link } from 'react-router-dom';

import { Container } from './style';

const Header = () => {
  return (
    <Container>
      <h1>cryptohex.io</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/00ff00">Color</Link>
      </nav>
    </Container>
  );
};

export default Header;
