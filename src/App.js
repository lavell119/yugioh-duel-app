import './App.css';
import Field from './components/Field.js'
import AllCards from './AllCards.js'
import KaibaDeck from './KaibaDeck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardControls from './components/cards/CardControls';
import Home from './components/Home'
import Navbar from './components/Navbar';
import YugiDeck from './YugiDeck';
import SingleCard from './SingleCard';
import YugiCard from './YugiCard';
import KaibaCard from './KaibaCard';
import DeckDraw from './components/DeckDraw';
import FiendDeck from './FiendDeck';
import FiendCard from './FiendCard';
import DeckCard from './DeckCard.js'
import LOBBooster from './LOBBooster.js'

function App() {
  return (
    <>

    <Router> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* all cards */}
        <Route exact path="/allcards" element={<AllCards />}></Route>
        <Route exact path="/allcards/:id" element={<DeckCard />}></Route>
        <Route exact path="/yugideck" element={<YugiDeck />}></Route>
        <Route exact path="/kaibadeck" element={<KaibaDeck />}></Route>
        <Route exact path="/field" element={<Field />}></Route>
        <Route exact path="/kaibadeck/:id" element={<KaibaCard deck="kaiba" />}></Route>
        <Route exact path="/yugideck/:id" element={<YugiCard deck="yugi" />}></Route>
        <Route exact path="/deckdraw" element={<DeckDraw />}></Route>
        <Route exact path="/fienddeck" element={<FiendDeck />}></Route>
        <Route exact path="/fienddeck/:id" element={<FiendCard />}></Route> 
        <Route exact path="/lobbooster" element={<LOBBooster />}></Route>
        {/* <Route exact path="/lobbooster/:id" element={<LOBCard />}></Route> */}


      </Routes>
    </Router>  
    </>
  );
}

export default App;
