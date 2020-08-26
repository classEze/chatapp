const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session')
require('dotenv').config();
const port=process.env.PORT || 5050
const passport=require('passport')
require('./Config/passport');


//Set View Engine
const handlebars= require('express-handlebars');
app.set('view engine', 'hbs')
app.engine('hbs', handlebars
({
    defaultLayout:'main',
    layoutsDir:__dirname +'/views/layouts',
    partialsDir:__dirname+'/views/partials',
    extname:'hbs'
}))

//Database Connection
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/GoogleStrategy', {useNewUrlParser: true, useUnifiedTopology: true}, (err,result)=>{
    if(err) return console.log(' Error: ' + error);
    console.log('Connection to mongodb Succesful')
})


app.use(cookieParser())
//Set express Session to save users session in app and database when i have a store
app.use(session({
    secret:'ekpembu',
    resave :false,
    saveUninitialized:false,
    // cookie:{secure:true}
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());


// Handle Routes
app.use('/', require('./routes'))
app.use('/auth', require('./GoogleRoutes'))
app.use((req,res,next)=> res.status(404).send(' Error: No page found'))
app.use((error,req,res,next)=> res.status(500).send(' Error: Internal Server Error'))





app.listen(port,'localhost', ()=>console.log(` Server listening to requests on ${port}`)) 
