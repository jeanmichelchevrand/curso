import './App.css';
import './Reset.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MoreInfo from './pages/MoreInfo/MoreInfo';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/+Info" element={<MoreInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
