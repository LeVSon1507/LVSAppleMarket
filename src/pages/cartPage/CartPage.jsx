import React from 'react';
import Footer from '../../components/Footer/Footer';
import NameBanner from '../../components/NameBanner/NameBanner';
import NavBar from '../../components/NavBar/NavBar';
import './CartPage.css';

function CartPage() {
   return (
      <div className='cartPageContainer'>
         <div className='cartPageContent'>
            <NavBar />
            <NameBanner name={'cart'} />
            <div className='cartContainer'>
               <h4>SHOPPING CART</h4>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default CartPage;
