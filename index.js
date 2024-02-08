const express = require('express')
const { listen } = require("express/lib/application");
const PORT = 3000
const mongoose = require('mongoose')

const app = express()

const start = async ()=>{
  try{

    app.listen(PORT,() => {console.log(("server starting"))})
  }
  catch(e){
    console.log(e)
  }
}

