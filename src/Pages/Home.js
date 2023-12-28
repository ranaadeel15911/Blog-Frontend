import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Home = () => {
  const [blog,setBlog] = useState([])
  const [data,setData] = useState('1')

  useEffect(()=>{
    // <Toaster/>
const fetchAllBlogs = async()=>{
const res = await axios.get("https://blog-server-eosin.vercel.app/api/v1/get/allblogs",
// const res = await axios.get("http://localhost:900/api/v1/get/allblogs",
{
  headers:{
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
  }
})
setBlog(res.data)
}
fetchAllBlogs()
  },[data])
  const handleDelete = async(id)=>{
    try {
      const res = await axios.delete(`https://blog-server-eosin.vercel.app/api/v1/delete/blog/${id}`)
      // const res = await axios.delete(`http://localhost:900/api/v1/delete/blog/${id}`)
      // alert('Blog Deleted Successfully')

      if(res.data){
        const updateBlog = blog.filter((user)=>{return( user.id !== id)})
        setBlog(updateBlog);
        // toast.success('Blog Deleted Successfully')
        toast("Blog Deleted Successfully",{
          icon:'🗑️'
        })
        if(data == "1"){
         return setData("2")
        }
        else if(data == "2"){
return setData("1")
        }
      }  
    } catch (error) {
      toast.error("Something gone wrong")
    } 
    
  };
  return (
    <>
    <main className='my-5'>
<div className="container shadow-lg">
    <section className='text-center'>
        <h2 className='mb-5 my-3'>
             <strong>Latest Post</strong>
        </h2>
        {/* <Toaster/> */}
        <div className="row">
          {blog && blog.length > 0 ? blog.map((items)=>
          <div className="col-lg-4 col-md-12 mb-4">
          <div className="card" >
<img className="card-img-top" width={50} height={270} src={items.thumbnail} alt="Card image cap"/>
<div className="">
  <h5 className="card-title mt-1">{items.title.length > 16 ? `${items.title.slice(0,16)}...` : items.title}</h5>
  <p className="card-text"  style={{height:39}}>{items.description.length > 86 ? `${items.description.slice(0,86)}...` :items.description }</p>
  {/* <input type="text" maxLength = "5" onBeforeInput={this.maxLengthCheck} value={items.description} /> */}
  <Link to={`/blog/${items._id}`} className='btn btn-primary mb-2'>Read More</Link>
  <button onClick={()=>handleDelete(items._id)} className='btn btn-danger mb-2 ms-2'>Delete</button>
</div>
</div>
          </div>
          ) : <h2>No Blog Created Yet...</h2>}
            
        </div>
    </section>
</div>
    </main>
    <footer className="bg-success text-white py-2 text-center">
        @ 2023 Copyright
    </footer>
    </>
  )
}

export default Home