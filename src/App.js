import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Header from './Components/Header'
import AddBlog from './Pages/AddBlog'
import AddCategory from './Pages/AddCategory'
import SingleBlog from './Pages/SingleBlog'
import PrivateRoute from './Services/PrivateRoute'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      <Toaster 
      reverseOrder={true}
      />
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<PrivateRoute/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-blog' element={<AddBlog/>}/>
      <Route path='/add-category' element={<AddCategory/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App