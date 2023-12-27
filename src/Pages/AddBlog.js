import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
const navigate = useNavigate()
  const [input,setInput] = useState({
    title:"",
    description:"",
    category:""
  })
  const [file,setFile] = useState([])
  const [category,setCategory] = useState([])
  useEffect(()=>{
    const fetchCategories = async()=>{
const res = await axios.get("http://localhost:900/api/v1/get/categories",
{
  headers:{
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
  }
})
setCategory(res.data)
    }
    fetchCategories()
  },[])
  //if we wants to send file of any type with form than we use FormData() function
  const formData = new FormData()
  formData.append("title",input.title)
  formData.append("category",input.category)
  formData.append("description",input.description)
  formData.append("thumbnail",file)
  const handleSubmit = async(e)=>{
e.preventDefault()
try {
  const res = await axios.post("http://localhost:900/api/v1/add/blog",formData
  ,
{
  headers:{
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
  }
})
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
        <h2 className="text-center my-3">Add a New Blog</h2>
        <div className="col-xl-12 my-3 d-flex align-items-center justify-content-center">
            <div className="row">
            <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Title </label>
        <input type="text" name='title' value={input.title} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})} className="form-control" id="exampleInputUsername" aria-describedby="UsernameHelp" placeholder="Blog Title"/>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Category </label>
        {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Blog Category"/> */}
        <br />
        <select  style={{border:'1px solid #dee2e6',borderRadius:'0.375rem',backgroundColor:'#fff',display:'block',width:'100%',padding:'.375rem .75rem',}} name="category" id='abc' onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}>
            {/* <option  >Select Category</option> */}
            {
              category && category.map((items)=>{
                return <option value={items._id}>{items.title}</option>
              })
            }
        </select>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea id='abc' name="description" className="form-control" placeholder="Blog Description" 
        value={input.description} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}></textarea>
      </div>
      <div class="mb-3">
  <label for="formFile" class="form-label">Thumbnail</label>
  <input name='file'   onChange={(e)=> setFile(e.target.files[0] || null)} placeholder='Select Thumbnail' class="form-control" type="file" />
</div>
      <button type="submit" className="btn btn-primary my-2">Add Blog</button>
    </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddBlog