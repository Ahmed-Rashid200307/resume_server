const express = require("express");
const {exec} = require("child_process");
const file = require("fs");

const app = express();

app.use(express.json());

app.post('/', (req,res)=> {
  console.log("req rec");
  console.log(req.query.theme);
  const resumeData = req.body;

  file.writeFileSync('resume.json',JSON.stringify(resumeData,null,2));

  exec(`resume export resume.html --theme ${req.query.theme}`, (error)=>{
    if(error){
      return res.status(500).send('Error generating resume');
    }

  res.sendFile('Resume-generated');
  })
})

app.get("/", (req, res)=>{
  res.end("Res sended");
})

module.exports = app;