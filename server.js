import express from "express"
const app = express()
import User from "./models/user.js"
import mongoose from "mongoose"
import session from "express-session"
import passport from "passport"
import  strategy from "passport-local"
import flash from "connect-flash"
import routes from "./Routes/routes.js"
import env from "dotenv" 
env.config()

let db = process.env.Mongodb__URL
mongoose.connect(db) ? console.log("connected") : console.log("error connecting mongoose")

app.set("view engine",  "ejs")
app.use(express.static('public'));
app.set("views");
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(session ({
   secret: "samuel",
   resave: true,
   cookie: {maxAge: 14 * 24 * 3600000}, //2wks
   saveUninitialized: true
}))
app.use(flash())
app.use(passport.session())
app.use(passport.initialize())
passport.use(new strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res, next)=>{
  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error")
  next()
})


app.use("/", (routes))
app.use("*", (req, res)=>{
 res.status(404).render("404")
})
const port = process.env.PORT || 3000
app.listen(port, console.log(`listening on port ${port}`))