import React from 'react'
import { Link } from 'react-router-dom'
import AllCards from '../AllCards'
import KaibaDeck from '../KaibaDeck'
import Field from './Field'
import YugiDeck from  '../YugiDeck'
import FiendDeck from '../FiendDeck'
import LOBBooster from '../LOBBooster'



export default function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/allcards" element={<AllCards />}>All Cards</Link>
        <Link to="/yugideck" element={<YugiDeck />}>Yugi Deck</Link>
        <Link to="/kaibadeck" element={<KaibaDeck />}>Kaiba Deck</Link>
        <Link to="/fienddeck" element={<FiendDeck />}>Fiend Deck</Link>
        <Link to="/lobbooster" element={<LOBBooster />}>Legend of Blue Eyes White Dragon</Link>
        <Link to="/">Home</Link>
        <Link to="/field" element={<Field />}>Field</Link>

    </div>
  )
}

