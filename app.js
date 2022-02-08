const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
const router = require('./router/route')
const cookieparser = require('cookie-parser')
const cookieSession = require('cookie-session')



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())


app.use(cookieSession({ 
    name : "eyeson-secret",
    keys: [process.env.SECRET_KEY],
    maxAge: 24 * 60 * 60 * 1000
  }));



app.use('/api',router)


app.listen(port,()=>{
    console.log("server running");
})


