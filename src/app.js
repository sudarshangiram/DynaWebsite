const express = require("express")
const { stat } = require("fs")
const hbs = require("hbs")
const path = require("path")
require("./db/conn")
const User = require("./models/usermessage");
const app = express()
const port = process.env.PORT || 3000



// setting path
const staticpath = path.join(__dirname,"../public");
const templatespath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../temlates/partials");





// middle ware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set('views', templatespath);
hbs.registerPartials(__dirname + '/templates/partials');

//routing
//app.get(path,callback)
app.get('/', (req, res) => {
  res.render("index");
})


app.post("/contact",async(req,res)=>{
      try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
        // res.status(201).send("Your message to the user goes here");
      }
      catch(error){
        res.status(500).send(error);
      }
})
//server create
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})