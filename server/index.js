import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import { postSignup,postLogin } from "./controllers/user.js";
import { postTransaction ,getTransactions} from "./controllers/transaction.js";
const app =express();
app.use(express.json());
app.use(cors());

//Connect to MongoDB

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log(`MongoDB connected Successfully ✅`)
    }
};
 connectDB();

 app.use((req, res, next)=>{
    console.log(req)
    next()
 })

 app.get('/', (req, res) => {
    res.json({
        message: "Welcome To Expense Tracker API"
    });
});

app.post("/signup", postSignup)

app.post("/login", postLogin)

app.post("/transaction", postTransaction)

app.get("/transactions",getTransactions)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});