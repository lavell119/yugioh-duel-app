import React from 'react'
import { Link } from 'react-router-dom'
import AllCards from '../AllCards'
import KaibaDeck from '../KaibaDeck'
import YugiDeck from '../YugiDeck'
import Field from './Field'

export default function Home() {
  return (

    <div class="home_page">
      <div className="home_title">
      <img class="logo" src={"/images/yugioh-logo.png"} style={{height: '100px'} }/>
      <h3>Duel App</h3>
      </div>
        <div class="home_nav">
          <Link to="/">Home</Link>
          <Link to="/allcards" element={<AllCards />}>All Cards</Link>
          <Link to="/yugideck" element={<YugiDeck />}>Yugi Deck</Link>
          <Link to="/kaibadeck" element={<KaibaDeck />}>Kaiba Deck</Link>
          <Link to="/field" element={<Field />}>Field</Link>
        </div>
    </div>
  )
}
