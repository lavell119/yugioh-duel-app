import React from 'react'
import { Link } from 'react-router-dom'
import KaibaDeck from '../KaibaDeck'
import YugiDeck from  '../YugiDeck'
import FiendDeck from '../FiendDeck'


export default function Decks() {
  return (
    <ul>
        <li><Link to="/yugideck" element={<YugiDeck />}>Yugi Deck</Link></li>
        <li><Link to="/kaibadeck" element={<KaibaDeck />}>Kaiba Deck</Link></li>
        <li><Link to="/fienddeck" element={<FiendDeck />}>Fiend Deck</Link></li>
    </ul>
    
  )
}
