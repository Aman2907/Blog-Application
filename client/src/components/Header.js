import React, { useState } from 'react'
import { AppBar, Box, Button, Toolbar, Typography, Tab, Tabs} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { authActions } from "../storee";
import '../App.css'

const Header = () => {
     const dispath = useDispatch();
     const  [value, setValue] =  useState()
     const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
     <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,138,1) 50%, rgba(69,226,252,1) 100%)"}}>
       <Toolbar>
       <Typography varient="h4" LinkComponent={Link} className="hover-effect" > ThinkNwrite </Typography>
        { isLoggedIn &&  <Box display="flex" marginLeft={'auto'} marginRight='auto'>
            <Tabs textColor='inherit' value={value} onChange={(e,val) => setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label="All blogs"/>
                <Tab LinkComponent={Link} to="/myBlogs" label="My blogs"/>
                <Tab LinkComponent={Link} to="/blogs/add" label="Add blog"/>
              
            </Tabs>
          </Box>} 
          <Box display="flex" marginLeft="auto">
             
             { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: '1', borderRadius:10 , left:"-12px"}} color='warning'> Login </Button>

             <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin: '1', borderRadius:10, left:"-7px" }} color='warning'> SignUp </Button>
             </> }

            { isLoggedIn && <Button onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin: '1', borderRadius:10 }} color='warning'> Logout </Button> }
          </Box>
       </Toolbar>
     </AppBar>
    </>
 )
}

export default Header;
