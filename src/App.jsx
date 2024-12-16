// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import LandingPage from './pages/Landing/LandingPage';
import Bingebuddy from './pages/Projects/BingeBuddy/BingeDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bingebuddy" element={<Bingebuddy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;