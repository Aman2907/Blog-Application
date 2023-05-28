
import { Route, Routes} from 'react-router-dom';
import React, { useEffect } from "react";
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import Auth from './components/Auth.js'
import Blogs from './components/Blogs.js'
import UserBlogs from './components/UserBlogs.js'
import BlogDetail from './components/BlogDetail.js'
import Addblog from './components/Addblog';
import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { authActions } from "./storee";


function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state => state.isLoggedIn))

  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);


  return (
  <>
   
   <header>
       <Header  />
   </header>
   <main>
      <Routes>
      
      <Route path='/'       element={<Home />}/>
      {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
          <> 
          
            <Route path='/blogs'       element={<Blogs />}/>
            <Route path='/myBlogs'     element={<UserBlogs />}/>
            <Route path='/myBlogs/:id' element={<BlogDetail />}/>
            <Route path='/blogs/add'   element={<Addblog />}/>
          </>
          )}
      </Routes>
   </main>
  </>
  )

}

export default App;
