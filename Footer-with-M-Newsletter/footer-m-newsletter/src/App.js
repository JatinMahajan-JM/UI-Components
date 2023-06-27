import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterM from './Footer/Footer.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FooterM/>} />
      </Routes>
    </Router>
  );
}

export default App;
