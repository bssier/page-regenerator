const express = require('express')
const { listen } = require("express/lib/application");
const PORT = 3000

const app = express()

const start = ()=>{
  try{
    app.listen(PORT,() => {console.log(("server starting"))})
  }
  catch(e){
    console.log(e)
  }
}
