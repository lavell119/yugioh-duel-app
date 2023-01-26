import React from 'react'
import Card from './Card.js'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export default function SpellTrapCardk(props) {


  let n = props.card
  const reduxCard = useSelector(state=>state.spellTrapCards[n])
  console.log(reduxCard)
  const [card, setCard] = useState(props)
  if(reduxCard===true){
    console.log('akejfjk')
  }

  // if(reduxCard) {
  //   return (
  //     <div className='card monster-card'>
  //       <Card status="set-magic" card={reduxCard}/>
  //     </div> 
  //   )
  // }

  return (
    <div className="card-zone spell-trap-card">
            {(reduxCard && reduxCard.set)&& <Card status="set" card={reduxCard}/>}

      {(reduxCard &&reduxCard.set===false)&& <Card status="active" card={reduxCard}/>}

    </div>
  )
  
  // if(card){
  // return (
  //   <div className="card spell-trap-card">
  //     <Card card="llll"/>
  //   </div>
  // )
// }
return (
  <div className="card-zone spell-trap-card"></div>
)
}

