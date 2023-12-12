import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import { login, logout } from '../../Store/AuthSlice'

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
    onClick={logoutHandler} >
      LogOut</button>
  )
}




export default LogoutBtn