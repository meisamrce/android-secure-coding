const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const crypto = require("crypto");

app.get("/", (req, res) => {
   console.log(req.query);
  res.send("ok");
});


app.post("/login", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if(username == "admin" && password == "1234")
  {
    const token = crypto.createHmac('sha256',"123").update('admin:1234').digest('hex');
    res.json({"result":"ok","token":token});
  }
  else
  {
    res.json({"result":"error"});
  }
});



const port = 999;
app.listen(port, "0.0.0.0", () => console.log(`Listening on port ${port}...!!!`));

