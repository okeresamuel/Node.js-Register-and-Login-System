export default function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        req.flash("success", "you are signin already")
       return res.redirect("/")
     }next()
}
