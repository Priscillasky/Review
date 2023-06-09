import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
  
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const dispalySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom -3
    openSubmenu(page,{center, bottom})
  }
const handleSubmenu = (e)=>{
  if(!e.target.classList.contains('links-btn')){
  closeSubmenu()
  }
}
  return ( 
  
  <nav className='nav' onMouseOver= {handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src= {logo} alt='stripe' className='nav-logo'/>
          <button className='btn togglr-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div> 
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={dispalySubmenu} >
            Products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={dispalySubmenu}>
            Developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={dispalySubmenu}>
            company
            </button>
          </li>
          
        </ul>
        <button className='btn signin-btn'>
          sign in
        </button>
      </div>
  </nav>
  )
}

export default Navbar
