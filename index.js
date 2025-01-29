const express = require("express");
const {exec} = require("child_process");
const file = require("fs");

const app = express();

app.use(express.json());

app.post('/generate-resume', (req,res)=> {
  console.log("req rec");
  console.log(req.query.theme);
  const resumeData = req.body;

  file.writeFileSync('resume.json',JSON.stringify(resumeData,null,2));

  exec(`resume serve --theme ${req.query.theme}`, (error)=>{
    if(error){
      return res.status(500).send('Error generating resume');
    }

  // res.sendFile('C:/Users/as comp/Desktop/Resume project/resume.pdf');
  })
})

app.listen(3000, () => console.log('Server is running on port 3000'));