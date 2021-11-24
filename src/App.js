import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layouts/base';

import Home from './pages/Home';
import Color from './pages/Color';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:hex" element={<Color />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
