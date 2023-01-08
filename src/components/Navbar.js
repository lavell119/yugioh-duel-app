import React from 'react'
import { Link } from 'react-router-dom'
import AllCards from '../AllCards'
import KaibaDeck from '../KaibaDeck'
import Field from './Field'

export default function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/allcards" element={<AllCards />}>All Cards</Link>
        <Link to="/kaibadeck" element={<KaibaDeck />}>Kaiba Deck</Link>
        <Link to="/">Home</Link>
        <Link to="/field" element={<Field />}>Field</Link>

    </div>
  )
}

