import React from 'react';
import './NavBar.css';

//route
import { useNavigate, useLocation } from 'react-router-dom';

// icon;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPerson } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
   const navigate = useNavigate();
   const location = useLocation();
   const handleClickGoTo = link => {
      navigate(link);
   };
   const isActive = pathname => location.pathname === pathname;

   return (
      <div className='container-fluid navbarContainer'>
         <div className='row containerNav container'>
            <div className='grLeft col-4'>
               <span
                  className={`homeText mx-2 ${isActive('/') ? 'active' : ''}`}
                  onClick={() => handleClickGoTo('/')}
               >
                  Home
               </span>
               <span
                  className={`shopText mx-2 ${isActive('/shopPage') ? 'active' : ''}`}
                  onClick={() => handleClickGoTo('/shopPage')}
               >
                  Shop
               </span>
            </div>
            <h2 className='title col-4' onClick={() => handleClickGoTo('/')}>
               BOUTIQUE
            </h2>
            <div className='grRight col-4'>
               <div className='cart' onClick={() => handleClickGoTo('/cartPage')}>
                  <FontAwesomeIcon icon={faCartShopping} className='icon' />
                  <span className='cartBtn'>Cart</span>
               </div>
               <div className='cart mx-2' onClick={() => handleClickGoTo('/loginPage')}>
                  <FontAwesomeIcon icon={faPerson} className='icon' />
                  <span className='cartBtn'>Login</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NavBar;
