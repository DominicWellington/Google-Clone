import React from 'react'
import Lab from '../../assets/conical-flask-svgrepo-com.svg'
import GoogleApps from '../../assets/icons8-circled-menu-100.png'
import Profile from '../../assets/profile.png'
 

const Navbar = () => {
  return (
    <div  className='top-3 flex justify-end gap-3 pr-4 relative'>

      < a href="gmail.com">Gmail</a>
      < a href="googlephotoes.com">Image</a>
      
      <img src={Lab} className='w-5 h-5'></img>
      <img src={GoogleApps} className='w-5 h-5'></img>
      <img src={Profile} className='w-5 h-5'></img>
      
    </div>
  )
}

export default Navbar
