import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [blog,setBlog] = useState({})
  useEffect(()=>{
    const fetchSingleBlog = async()=>{
// const res = await axios.get(`http://localhost:900/api/v1/get/blog/${id}`
const res = await axios.get(`https://blog-server-eosin.vercel.app/api/v1/get/blog/${id}`
,
{
  headers:{
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
  }
})
setBlog(res.data)
    }
    fetchSingleBlog()

  },[id])
  return (
    <>
    <div className="container shadow"
    >
        <div className="col-xl-12 my-3  border border-1 ">
            <div className="row d-flex align-items-center justify-content-center">

                <h1 className='my-3'>{blog.title}</h1>
                <img src={blog.thumbnail}
                className='img img-responsive img-rounded my-3 w-50 '   alt="" />
                <p className='my-3'>{blog.description}</p>
            </div>
        </div>
        <button className='btn btn-primary mb-3' onClick={()=>navigate("/")} >Back To Post</button>
    </div>

    </>
  )
}

export default SingleBlog