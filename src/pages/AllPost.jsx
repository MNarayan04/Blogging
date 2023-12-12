import React ,{useState,useEffect} from 'react'
import appwriteServices from "../appwrite/config"
import { Container,Postcard } from '../Component'


function AllPost() {
    cosnt [posts , setPosts] = useState([])

    useEffect(()=>{},[])
    appwriteServices.getPost([]).then((posts)=>{
        if(posts)
        {
            setPosts(posts.documents)
        }
    })

  return (
    <div className=' w-full py-7'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.map((post)=>{
                        <div key = {post.id}
                        className='p-3 w-3'>
                            <Postcard post ={post}/>
                            </div>
                    })
                }
            </div>
        </Container>

    </div>
  )
}

export default AllPost