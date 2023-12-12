import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/Auth'
import {login,logout} from './Store/AuthSlice'
import {Outlet} from 'react-router-dom'
import{Footer,Header} from './Component'



function App() {
  const [count, setCount] = useState(0)

    // console.log(import.meta.env.VITE_APPWRITE_URL);
  const[loading,setloading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{ 
    authService.getCurrentUser()
    .then((useData)=>{
      if(useData){
        dispatch(login({useData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setloading(false)
    })
  },[])

  return !loading ? (
    <div className='min-h-sc  bg-slate-500 flex flex-wrap justify-center'>
     <div className='w-full  flex flex-wrap justify-center'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
     </div>
    </div>
  ):null
}

export default App
