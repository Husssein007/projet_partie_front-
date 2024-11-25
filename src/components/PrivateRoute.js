
import React, { useEffect, useState } from 'react'
//api fetch user
import { fetchUser } from '../api/authApi'

import { useNavigate } from 'react-router-dom'
import UserPage from './user/UserPage'
import AdminPage from './admin/AdminPage'


const PrivateRoute = () => {

  const navigate=useNavigate()

const [userAcount,setUserAcount]=useState('')

const getAcount=async()=>{
 const data = await fetchUser()
 console.log('data fetch user',data)
 setUserAcount(data)
  }

console.log('data jdidia get user',userAcount)

useEffect(()=>{
getAcount()
},[])



const logout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}


  return (
    <div>
      {userAcount.role==='user' ? <UserPage  user={userAcount} logout={logout}   /> : <AdminPage  user={userAcount}  logout={logout}  />}

      </div>
  )
}

export default PrivateRoute
