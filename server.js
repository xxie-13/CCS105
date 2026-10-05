//declaration
const express=require('express') //API HTTP methods (CRUD) post, get , put, delete
const app=express()

//endpoints API
app.get('/metric-converter',(req,res)=>{
    res.send(" ")
})

//port
app.listen(5552,()=>{
    console.log(`Server is running in port 5552`)
})

