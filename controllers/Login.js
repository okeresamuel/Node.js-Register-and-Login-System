export const GetRequest__Login = (req,res)=>{
    res.render("Login")
}

export const PostRequest__Login =  (req, res)=>{
    req.flash("success", "Welcome back !!")
    res.redirect("/")
}