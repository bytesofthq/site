import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="portfolio" element={<Portfolio />} /> */}
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
