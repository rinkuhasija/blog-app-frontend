import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs/Blogs'
import SingleBlogPost from './pages/SingleBlogPost/SingleBlogPost'
import AddBlog from './pages/AddBlog/AddBlog'
import { AuthProvider } from './context/login/authContext'
import { DataProvider } from './context/dataContext/dataContext'

function App() {

  return (
    <>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>

              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<Blogs />} />
              <Route path="/blog/:id" element={<SingleBlogPost />} />
              <Route path='/add-blog' element={<AddBlog />} />

            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </>
  )
}

export default App
