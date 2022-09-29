
export default function IfLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect("/login")
     }next()
}
