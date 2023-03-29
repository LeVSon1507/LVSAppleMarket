import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './SignUpPage.css';

function SignUpPage() {
   return (
      <div className='signUpPageContainer'>
         <div className='signUpPageContent'>
            <NavBar />
         </div>
         <Footer />
      </div>
   );
}

export default SignUpPage;
