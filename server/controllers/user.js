import User from "../models/User.js";



const postSignup = async (req, res) => {
    const { fullName, email, password, dob } = req.body;
    const user = new User({
        fullName,
        email,
        password,
        dob: new Date(dob)
    })

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            message: `Signup Succsessful`,
            data: savedUser
        })
    }

    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const postLogin=async(req,res)=>{
    const {email,password}=req.body
    
    const user= await User.findOne({
        email:email,
        password:password
    })

    if(user){
        res.json({
            sucess:true,
            message:"login Successful",
            data:user

        })
    }

    else{
        res.json({
            sucess:false,
            message:"Invalid Credentials",
            data:null
        })
    }
}
export {postSignup ,postLogin}

