import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

const postTransaction = async (req, res) => {

    const { title, amount, category, type, user } = req.body

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user
    });


    try {
        const savedTransaction = await transaction.save();
        res.json({
            success: true,
            message: "Transaction Successful",
            data: savedTransaction
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

const getTransactions =async(req,res)=>{
    const {userId}=req.body;

    const user = await User.findById(userId);

    if(!user){
        res.json({
            success:false,
            message:"user not found",
            data:null
        })
    }

    const transactions = await Transaction.findById({user:userId})

    res.json({
        sucess:true,
        message:"Transactions fetched successfully",
        data:transactions
    })

}

export { postTransaction ,getTransactions}

