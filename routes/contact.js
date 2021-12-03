const express=require('express')
const router=express.Router()
const {addContact,getAllContacts,deleteContact,upDateContact,getContact}=require('../controllers/contact')
const upload = require('../middlewares/upload')



// path: api/contacts/test
router.get('/test',(req,res)=>{
    res.send("this is test")
})

// method post
//url /
// req.body

router.post('/',upload.single("myImage"),addContact)
// method get
// url  /
router.get('/',getAllContacts)

// method delete
// url /:contactId
// req.params

router.delete('/:contactId',deleteContact)

// method put
// url /:contactId
// req.body
// req.params
router.put('/:contactId',upDateContact)

// method get
// url /:contactId
// req.params

router.get('/:contactId',getContact)

module.exports=router