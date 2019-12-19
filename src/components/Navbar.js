import React from 'react';
import logo from '../SVG/Stockmal_Logo.svg'

const Navbar = () => {
  return(
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo"><img className="logoIMG" src={logo} alt=""/></a>

      </div>
    </nav>
  )
}

export default Navbar;
