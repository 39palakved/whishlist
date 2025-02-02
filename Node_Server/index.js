const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors())
const bodyparser = require('body-parser');
app.use(bodyparser.json())
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wishhub');
  console.log("database connected");

}
const wish= new mongoose.Schema({
    title: String,
    description :String,
    category :String,
    image : String,
  

  });
  const wishmodel = mongoose.model('wishmodel', wish );

app.listen(8080,()=>{
    console.log("server started");
})
app.get('/getwish',async(req,res)=>{
  const items = await wishmodel.find()
  res.json(items)
})
app.post('/form',(req,res)=>{
    const wi = new wishmodel();
    wi.title = req.body.title;
    wi.description = req.body.description;
    wi.category = req.body.cat
    wi.image = req.body.img
    wi.save();
    res.send(req.body)
})