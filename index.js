const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=> res.send('JAveed is good boy'))
app.listen(port,()=>console.log("connection extablishied..!!"))