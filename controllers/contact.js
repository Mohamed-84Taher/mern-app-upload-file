const Contact=require('../models/Contact')


exports.addContact=async(req,res)=>{
    const {name,email,age}=req.body
    let imageUrl=""
    if(req.file){
        imageUrl=req.file.filename
    }
try {
    const contact=new Contact({
        name,email,age,imageUrl
    })
  await  contact.save()
  res.send({msg:"contact added",contact})
} catch (error) {
    console.log('impossible to add contact')
}
}

exports.getAllContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send({msg:"list contacts",contacts})
    } catch (error) {
        res.status(500).send('server error')
    }
}

exports.deleteContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        await Contact.findByIdAndDelete(contactId)
        res.send("contact deleted")
    } catch (error) {
        res.status(500).send("server error")
    }
}

exports.upDateContact=async(req,res)=>{
    const {contactId}=req.params
 
    // const {name,email,age}=req.body
    try {
        await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
        res.send('contact update')
    } catch (error) {
        res.status(500).send('server error')
    }
}
exports.getContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        const contact=await Contact.findOne({_id:contactId})
        res.status(200).send(contact)
    } catch (error) {
        res.status(500).send('server error')
    }
}