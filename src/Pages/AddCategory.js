import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const AddCategory = () => {
  const navigate = useNavigate()
  const [input , setInput] = useState({
    title:""
  })
  const onhandleCategory = async(e)=>{
e.preventDefault()
try {
  const res = await axios.post("https://blog-server-eosin.vercel.app/api/v1/add/category",input,
  // const res = await axios.post("http://localhost:900/api/v1/add/category",input,
  {
    headers:{
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
  })
  // alert(res.data.message)
  toast.success(res.data.message)

navigate("/")
} catch (error) {
  toast.error(error.response.data.message)
}
  }
  return (
    <>
    <div className="container shadow"
    >
        <h2 className="text-center my-3">Add a New Category</h2>
        <div className="col-xl-12 my-3 d-flex align-items-center justify-content-center">
            <div className="row">
            <form onSubmit={onhandleCategory}>
      <div className="form-group">
        <label for="exampleInputEmail1">Title </label>
        <input type="text" name='title' value={input.title} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} className="form-control" id="exampleInputUsername" aria-describedby="UsernameHelp" placeholder="Category Title"/>
      </div>
      <button type="submit" className="btn btn-primary my-2">Add Category</button>
    </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddCategory