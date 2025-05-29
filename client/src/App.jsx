import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import LAN from './pages/LAN';

function App() {
  return (
    <div className="flex min-h-screen">
      <Nav />
      <div className="flex-1 flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lan" element={<LAN />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
