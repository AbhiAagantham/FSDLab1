const express=require('express')
const app=express()
const path=require('path')
const port =3000

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})
app.listen(port,()=>{
    console.log(`The Server starte at https://localhost:${port}`)
})