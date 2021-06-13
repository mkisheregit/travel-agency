import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Mk travels
            <i class='fa fa-bus' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link
                to='/book-tickets'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Complete Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/your-bookings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Your Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact-us'
               className='nav-links' 
               onClick={closeMobileMenu}>
              Contact us
              </Link>
            </li>
            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;