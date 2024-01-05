import React from 'react'
import LobBooster from './components/lob_booster.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import SingleCardSnippet from './components/SingleCardSnippet'

let int = 2

export default function LobCard() {
    console.log(LobBooster)
    const { id } = useParams()
    let selectedCard = LobBooster[id]
    console.log(selectedCard)



  return (
    <>
    <Link to="/lobbooster"><h4 class="white">Back</h4></Link>

    <SingleCardSnippet card={selectedCard} />
    </>
  )
}