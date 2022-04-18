import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = e =>{
       e.preventDefault();
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       console.log(email,password);
    }
    const navigateRegister = event =>{
        navigate('/register');
    }
    return (
        <div className='login-form'>
            <h2>please login</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email Address" required/>
           
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required/>
                <input type="submit" value="Submit" />
            </form>
            <p>create new account? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;