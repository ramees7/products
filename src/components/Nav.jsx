import React from 'react'
import {Button} from '@mui/material';
import "./Nav.css"



function Nav() {
  return (
    <div className='nav'>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
      
        <i class="fa-solid fa-magnifying-glass fa-lg" style={{color: "#000000"}} ></i>
        <input type="text" placeholder='Search for Products and More'  className='nav-input'/>
        <Button variant="outlined" className='signin-btn'>Sign In</Button>
        <Button variant="contained" className='signup-btn'>Sign Up</Button>

    </div>
  )
}

export default Nav