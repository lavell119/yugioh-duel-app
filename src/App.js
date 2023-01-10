import './App.css';
import Field from './components/Field.js'
import AllCards from './AllCards.js'
import KaibaDeck from './KaibaDeck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardControls from './components/cards/CardControls';
import Home from './components/Home'
import Navbar from './components/Navbar';
import YugiDeck from './YugiDeck';


function App() {
  return (
    <>

    <Router> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/allcards" element={<AllCards />}></Route>
        <Route exact path="/yugideck" element={<YugiDeck />}></Route>
        <Route exact path="/kaibadeck" element={<KaibaDeck />}></Route>
        <Route exact path="/field" element={<Field />}></Route>


      </Routes>
    </Router>  
    </>
  );
}

export default App;
