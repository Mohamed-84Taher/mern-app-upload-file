import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addContact,editContact } from '../../redux/actions/contactActions'
import './AddEdit.css'

function AddEdit() {
  const [formData,setFormData]=useState({name:"",email:"",age:0})
  const [file,setFile]=useState(null)
  

const edit=useSelector(state=>state.contactReducer.edit)
const contact=useSelector(state=>state.contactReducer.contact)


const dispatch=useDispatch()
const navigate=useNavigate()

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

useEffect(()=>{
  edit ? setFormData({name:contact.name,email:contact.email,age:contact.age}):setFormData({name:"",email:"",age:0})
},[contact,edit])

const handleAdd=()=>{
  let data=new FormData()
  data.append("name",formData.name)
  data.append("email",formData.email)
  data.append("age",formData.age)
  data.append("myImage",file)
  dispatch(addContact(data));
  navigate('/lists')
}

    return (
    
        <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo"><h2><i className="fab fa-android"></i></h2></span>
            <h4 className="company_title">Your Company Logo</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluidd">
              <div className="row">
                <h2>add new contact</h2>
              </div>
              <div className="row">
                <form className="form-group">
                  <div className="row">
                    <input type="text" name="name" defaultValue={formData.name}  className="form__input" placeholder="Username" onChange={handleChange} />
                  </div>
                  <div className="row">
                    <input type="text" name="email" defaultValue={formData.email}   className="form__input" placeholder="email"onChange={handleChange}  />
                  </div>
                  <div className="row">
                    <input type="number" name="age" value={formData.age||0}   className="form__input" placeholder="age" onChange={handleChange}  />
                  </div>
                  <div className="row">
                    <input type="file"    className="form__input" placeholder="age" onChange={e=>setFile(e.target.files[0])}  />
                  </div>
               
                  {
                    edit ? <div className="row">
                    <input  defaultValue="Edit" className="btn" onClick={()=>{dispatch(editContact(contact._id,formData));navigate('/lists')}} />
                  </div>:<div className="row">
                    <input  defaultValue="Add" className="btn" onClick={handleAdd} />
                  </div>
                  }
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default AddEdit
