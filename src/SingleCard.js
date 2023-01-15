import React from 'react'
import { useParams } from 'react-router-dom'
import KaibaDeck from './components/kaiba_deck.json'
import YugiDeck from './components/kaiba_deck.json'

export default function SingleCard(props) {
    console.log(KaibaDeck)
    console.log(YugiDeck)
    console.log(props)
    const { id } = useParams()
    console.log(id)
  return (
    <div>SingleCard</div>
  )
}
