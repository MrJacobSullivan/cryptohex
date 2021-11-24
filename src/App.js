import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Color from './pages/Color';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:hex" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
