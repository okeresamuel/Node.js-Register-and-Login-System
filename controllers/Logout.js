export const PostRequest__Logout = (req,res)=>{
    req.logout((err)=>{
    err ? console.log("error while trying to log out") : res.redirect("/Login")
    })
 }