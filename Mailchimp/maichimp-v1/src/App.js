import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mailchimp from './Mailchimp/Mailchimp';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mailchimp/>} />
      </Routes>
    </Router>
  );
}

export default App;
