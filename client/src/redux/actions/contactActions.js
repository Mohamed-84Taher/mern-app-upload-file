import { GETALLCONTACTS, GETCONTACT, TOGGLEFALSE, TOGGLETRUE } from "../types"
import axios from 'axios'

export const getAllContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/contacts')
         dispatch({type:GETALLCONTACTS,payload:res.data.contacts})
    } catch (error) {
        console.log(error)
    }

}

export const addContact=(formData)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts',formData)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    if(window.confirm('Are you sure')){
    try {
       
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getAllContacts())
        
    } catch (error) {
        console.log(error)
    }
}
}
export const editContact=(id,formData)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,formData)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/api/contacts/${id}`)
        dispatch({type:GETCONTACT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const toggleTrue=()=>{
return {
    type:TOGGLETRUE
}
}
export const toggleFalse=()=>{
    return {
        type:TOGGLEFALSE
    }
    }