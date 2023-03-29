import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';

function LoginPage() {
   const navigate = useNavigate();
   const handleLogin = () => {};
   const goToSignUp = () => {
      navigate('/signUpPage');
   };
   return (
      <div className='loginPageContainer'>
         <div className='loginPageContent'>
            <NavBar />
            <div className='loginBannerImg'>
               <div className='loginFormContainer'>
                  <h2>Sign In</h2>
                  <form className='loginForm' onSubmit={handleLogin}>
                     <input type='email' className='email' placeholder='Email' />
                     <input type='password' className='password' placeholder='Password' />
                     <button className='btnSubmit' type='submit'>
                        SIGN IN
                     </button>
                  </form>
                  <p className='signUp'>
                     Create an account? <span onClick={goToSignUp}>Sign Up</span>
                  </p>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default LoginPage;
