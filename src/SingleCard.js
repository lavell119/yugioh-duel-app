import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleCard() {
    const { id } = useParams()
    console.log(id)
  return (
    <div>SingleCard</div>
  )
}
