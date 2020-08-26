const passport=require('passport')
const mongoose=require('mongoose')
const googleStrategy=require('passport-google-oauth20').Strategy
const user=require('../Model')
require('dotenv').config();

passport.use(new googleStrategy({
    clientID:process.env.Id,
    clentSecret:process.env.Secret,
    callbackURL:'/auth/google/callback'
},
   (accessToken,refreshToken,profile,done)=>{
     return  console.log(profile);
}
))

// passport.serializeUser((user,done)=>{
//     return done(null,user)
// })

// passport.deserializeUser((user,done)=>{
//     return done(null,user)
// })

module.exports=passport