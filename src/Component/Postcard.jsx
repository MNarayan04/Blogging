import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function Postcard({$id,title,featuredImage}) {
  
    return 
  (
    <Link to={`/post/${id}`} >
        <div className='w-full bg-grey-400 rounded-xl p-4' >
            <div className='w-full justify-center mb-4'>

                <img src={appwriteService.getfilePreview(featuredImage)} alt={title} 
                className='rounded-xl p-4'
                />
            </div>

            <h2 className='text-xl font-bold' > {title} </h2>
        </div>
    </Link>
  )
}


export default Postcard