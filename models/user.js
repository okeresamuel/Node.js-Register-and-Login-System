import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"
const user = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
})

user.plugin(passportLocalMongoose)
const User = mongoose.model("user", user)
export default User; 
