import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'

function CardList() {
  const contacts=useSelector(state=>state.contactReducer.contacts)
    return (
        <div className="container mx-auto mt-4">
        <div className="row">
         {
           contacts.map(contact=><Card key={contact._id} contact={contact} />)
         }
            </div>
            </div>
    )
}

export default CardList
