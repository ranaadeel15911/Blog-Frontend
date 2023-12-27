import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Signup = () => {
  const navigate = useNavigate()
  const [input,setInput] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      // const res = await axios.post("http://localhost:900/api/v1/user/register",input)
      const res = await axios.post("https://blog-server-eosin.vercel.app/api/v1/user/register",input)
      toast.success(res.data.message)
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="container shadow mt-3">
    <h2 className='text-center'>Sign Up Here</h2>
    <div className="col-md-12 my-3 d-flex align-items-center justify-content-center">
    <div className="row">
    
        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Name </label>
        <input type="text" name='username' value={input.username} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} className="form-control" id="exampleInputUsername" aria-describedby="UsernameHelp" placeholder="Enter Name"/>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input type="email" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary my-2">Signup</button>
    </form>
    </div>
    </div>
        </div>
  )
}

export default Signup