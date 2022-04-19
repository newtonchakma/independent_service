
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLagin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
   
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth
      );
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

      if(user) {
          navigate(from, {replace: true});
      }

      if (error) {
      
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
     
      }
    const handleSubmit = e =>{
       e.preventDefault();
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event =>{
        navigate('/register');
    }
    const resetPassword =async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email')
    }
    return (
        <div className='login-form'>
            <h2>please login</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email Address" required/>
           
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required/>
                <input type="submit" value="LogIn" />
            </form>
            {errorElement}
          
            <p>create new account? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;