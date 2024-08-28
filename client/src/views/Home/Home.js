import React, { useEffect, useState } from "react";
import "./Home.css";
import toast, { Toaster } from "react-hot-toast";
import axios, { all } from "axios";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import ImgAdd from "./add.png"
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [netIncome, setNetIncome] = useState(0);
  const [netExpence, setNetExpence] = useState(0);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const loadTransaction = async () => {
    if (!user._id) {
      return;
    }

    toast.loading("Loading Transactions..");

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/transactions?userId=${user._id}`
    );

    const allTransactions = response.data.data;

    toast.dismiss();

    setTransactions(response.data.data);
  };

  useEffect(() => {
    loadTransaction();
  }, [user]);

  useEffect(() => {
    let income = 0;
    let expence = 0;

    transactions.forEach((transaction) => {
      if (transaction.type == "credit") {
        income += transaction.amount;
      } else {
        expence += transaction.amount;
      }
    });

    setNetIncome(income);
    setNetExpence(expence);
  }, [transactions]);

  return (
    <div>
      <h1 className="home-greeting auth-heading">Hello {user.fullName}</h1>
      <h2 className="home-heading auth-heading" >Welcome to the Expence Tracker</h2>
      <span
        className="home-logout"
        onClick={() => {
          localStorage.clear();
          toast.success("Logout Successfully!!");

          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }}
      >
        Logout
      </span>

      <div className="net-transactions-value">
        <div className="net-transactions-value-item">
          <span className="net-transaction-value-amount">+ {netIncome}</span>
          <span className="net-transactions-value-title">Net Income</span>
        </div>

        <div className="net-transactions-value-item">
          <span className="net-transaction-value-amount">- {netExpence}</span>
          <span className="net-transactions-value-title">Net Expence</span>
        </div>

        <div className="net-transactions-value-item">
          <span className="net-transaction-value-amount">
            {netIncome - netExpence}
          </span>
          <span className="net-transactions-value-title">Net Balance</span>
        </div>
      </div>

      <div className="transactions-container">

        {transactions.map((transaction) => {
          const { _id, title, amount, category, type, createdAt } = transaction;

          return (
            <TransactionCard
              key={_id}
              _id={_id}
              title={title}
              amount={amount}
              category={category}
              type={type}
              createdAt={createdAt}
              loadTransaction={loadTransaction}
            />
          );
        })}
      </div>

     <Link to='/add-transaction'>
     <img src={ImgAdd} alt="Add Transaction" className="add-transaction"/>
     </Link>
      
      <Toaster />
    </div>

   
  );
}

export default Home;
