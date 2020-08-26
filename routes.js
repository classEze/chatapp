const router=require('express').Router();

router.get('/', (req,res)=>res.render('home'))

router.get('/signUp', (req,res)=> res.render('form'))

router.post('/signUp', (req,res)=>{
    const {name,complexion,isMarried}=req.body;
})

router.get('/login', (req,res)=>{
    res.render('login')
})

router.post('/login', (req,res)=>{
    res.send('You have login')
})



module.exports=router