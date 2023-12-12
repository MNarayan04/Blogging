import React,{useState,useEffect} from 'react'
import {Container,PostForm} from '../Component'
import appwriteServices from '../appwrite/config'
import { useNavigate,useParams } from 'react-router-dom'


function EditPost() {
 
    const [post,setPosts]=useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteServices.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[])

    return post ? (
        <div className='py-7'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ): null
}
import { Form } from 'react-router-dom'
import { set } from 'react-hook-form'




export default EditPost