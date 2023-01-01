const express = require("express");
const app = express();
const port =process.env.PORT || 9000;

app.use(express.static('src'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/src/index.html");
})

app.listen(port,()=>{
  console.log("Server is Running on Port."+port);
})