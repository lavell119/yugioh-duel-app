import React from 'react'
import Card from './Card.js'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export default function MonsterCard(props) {
  let n = props.card
  const reduxCard = useSelector(state=>state.monsters[n])
  console.log(reduxCard)
  const [card, setCard] = useState(props)

  if(reduxCard) {
    return (
      <div className='card monster-card'>
        <Card card={reduxCard}/>
      </div>
    )
  }

  // console.log(card)
//   if(cardProp){
//   return (
//     <div className="card monster-card">
//       <Card card={cardProp}/>
//     </div>
//   )
// }
return (
  <div className="card monster-card"></div>

)
}


