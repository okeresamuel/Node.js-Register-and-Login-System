import passport from "passport"
import { Dashboard } from "../controllers/dashboard.js"
import { PostRequest__Register, GetRequest__Register } from "../controllers/Register.js"
import { GetRequest__Login, PostRequest__Login } from "../controllers/Login.js"
import { PostRequest__Logout } from "../controllers/Logout.js"
import isLoggedIn from "../middleware/isLoggedIn.js"
import NotLoggedIn from "../middleware/NotLoggedIn.js"
import express from "express"
const router = express.Router()

router.get("/",  NotLoggedIn, Dashboard)

router.get("/register",  isLoggedIn, GetRequest__Register )
router.post('/register',  isLoggedIn, PostRequest__Register )

router.get("/login",  isLoggedIn, GetRequest__Login)
router.post("/login", isLoggedIn, passport.authenticate("local", {failureFlash:true, failureRedirect: "/login" }), PostRequest__Login)

router.post("/logout", PostRequest__Logout)





export default router