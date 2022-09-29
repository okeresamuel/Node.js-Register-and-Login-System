import User from "../models/user.js"

export const GetRequest__Register = (req, res)=>{
 res.render("Register")
}


export const PostRequest__Register = async (req,res) =>{
    try {
     const {email, username, password} = req.body;
     const newuser =  new User({email, username})
     const registereduser = await User.register(newuser, password)              
      await res.redirect("/")
    } catch (error) {
    req.flash("error", "A user with that username or email already exist")
    res.redirect("register")
}}


