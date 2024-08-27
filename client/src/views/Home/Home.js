import React ,{useEffect, useState} from 'react'
import "./Home.css"
import toast,{Toaster} from "react-hot-toast"
import axios from "axios"
import TransactionCard from '../../components/TransactionCard/TransactionCard'


function Home() {

  const[user,setUser]=useState('')
  const[transactions,setTransaction]=useState('')

  useEffect(()=>{

    const currentUser =JSON.parse(localStorage.getItem('currentUser'))

   if(currentUser){
    setUser(currentUser)
   }

    if(!currentUser){
      window.location.href='/login'
    }
  },[])

  const loadTransaction =async()=>{
    if(!user){
      return
    }

    toast.loading('Loading Transactions..')

    const response =await axios.get(`${process.env.REACT_APP_API_URL}/transaction? 
      userId=${user._id}`)

      toast.dismiss()

      setTransaction=(response.data.data)

  }

  useEffect(()=>{
    loadTransaction()
  },[user])

  return (
    <div>
      <h1 className='home-greeting'>Hello {user.fullName}</h1>
      <h2 className='home-heading'>Welcome to the Expence Tracker</h2>
      <span className='home-logout' onClick={()=>{
        localStorage.clear()
        toast.success("Logout Successfully!!")

        setTimeout(()=>{
          window.location.href="/login"

        },3000)
        }}>Logout</span>

         {
           transactions.map((transaction) => {
            const {_id,title,amount,category,type,createdAt}=transaction
            
            return(<TransactionCard
            key={_id}
            _id= {_id}
            title={title}
            amount={amount}
            category={category}
            type={type}
            createdAt={createdAt}
            loadTransaction={loadTransaction}
            />)

           })

         }
        <Toaster/>
    </div>
  )
}

export default Home