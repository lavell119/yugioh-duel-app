import './App.css';
import Field from './components/Field.js'
import AllCards from './AllCards.js'
import KaibaDeck from './KaibaDeck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
  
      <Routes>
        <Route exact path="/" element={<Field />}></Route>
        <Route exact path="/allcards" element={<AllCards />}></Route>
        <Route exact path="/kaibadeck" element={<KaibaDeck />}></Route>
      </Routes>
    </Router>
  
    
  );
}

export default App;
