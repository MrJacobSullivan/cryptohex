import { StrictMode } from 'react';
import { render } from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import App from './App';

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
