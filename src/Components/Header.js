import React from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    toast('Loged Out Successfully',{
      icon:'↪'
    })
navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
  <div className="container">
    <Link to='/' className="navbar-brand" >AdeelBlogs</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
      <li className="nav-item">
          <Link to='/' className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/add-blog' className="nav-link active" aria-current="page" >Add Blog</Link>
        </li>
        <li className="nav-item">
          <Link to='add-category' className="nav-link active" >Add Category</Link>
        </li>
        
        {/* <li className="nav-item dropdown active">
          <Link className="nav-link active dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " >Action</Link></li>
            <li><Link className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li> */}
        </ul>
        {
        token && token !== null ?
        <div className=' ms-auto '>
          <button className='btn btn-success'>Welcome {username}</button>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
</div>
      :
      <div className=' ms-auto '>
      <Link to='/login' className='btn btn-success'>
      Login
      </Link>
      <Link to='/signup' className='btn btn-success'>
      Signup
      </Link>
</div>
      }
    </div>
  </div>
</nav>
  )
}

export default Header