import React from 'react'
import { Container,Logo,LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Header() {

  const authStatus = useSelector((state)=> state.auth.status)

  const navigate = useNavigate()

  const navItem = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]

             

  return (
  <header className='py-3 shadow bg-blue-600 w-120%
  h-100%'>
    <Container>
    <nav className='flex w-100 h-100'>

      {/* LOGO  */}
    <div className='mr-4 '>
      <Link to='/'>
        <Logo width='70px'/>
      </Link>
    </div>

    <ul className='flex ml-auto w-100 h-100'> 
        {navItem.map((item)=>
          item.active ? (
            <li key={item.name}>
              <button onClick={()=> navigate(item.slug)} className='
              inline-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-xl'
              >{item.name}</button>
            </li>
          ):null
        )}

        {authStatus && (
          <li>
            <LogoutBtn/>
          </li>
        )}
      </ul>
    </nav>

    </Container>

  </header>
  )
}

export default Header