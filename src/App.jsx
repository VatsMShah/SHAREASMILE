import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
import Education from './pages/Education';
import Healthcare from './pages/Healthcare';
import Poverty from './pages/Poverty';
import Women from './pages/Women';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Covid from './pages/Covid';

export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-home" element={<HomeV2 />} />
          <Route path="/home-v2" element={<HomeV2 />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/poverty-enrichment" element={<Poverty />} />
          <Route path="/women-empowerment" element={<Women />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/covid-19" element={<Covid />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
