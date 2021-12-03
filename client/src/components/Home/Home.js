import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import {getAllContacts, toggleFalse} from '../../redux/actions/contactActions'


function Home() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
    return (
        <div className="home">
           <button className="app-btn"
            onClick={()=>{dispatch(getAllContacts());navigate('/lists')}}
            >Contact List</button>
            <button className="app-btn"
            onClick={()=>{dispatch(toggleFalse());navigate('/addEdit')}}
            >Add Contact</button>
           
       
    </div >
    )
}

export default Home
