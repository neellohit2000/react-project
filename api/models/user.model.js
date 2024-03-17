import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email
    :{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
        default:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture.png"

    }
},{timestamps:true});
const User =mongoose.model('User',userSchema);
export default User;