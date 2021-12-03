import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteContact, getOneContact, toggleTrue } from '../../redux/actions/contactActions'
import './Card.css'


function Card({contact}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    return (
        <div className="col-md-4">
        <div className="card" style={{width: "18rem"}}>
    <img src={contact.imageUrl ? `uploads/${contact.imageUrl}`:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"} className="card-img-top" width="100%" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{contact.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted"> {contact.email}</h6>
      <p className="card-text">{contact.age}</p>
         <p className="btnn mr-2" onClick={()=>dispatch(deleteContact(contact._id))} ><i className="fas fa-user-times"></i> Delete</p>
      <p className="btnn" onClick={()=>{dispatch(getOneContact(contact._id));dispatch(toggleTrue());navigate('/addEdit')}}   ><i className="fas fa-user-edit"></i> Edit</p>
    </div>
    </div>
      </div>    
    )
}

export default Card
