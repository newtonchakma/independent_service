import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLagin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError1] = useUpdateProfile(auth);

    const navigateLogin =()=>{
        navigate('/login')
    }
    /* if(user){
        
    } */
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName : name });
       console.log('Updated profile');
       navigate('/home');
    }
    return (
        <div className='register-form'>
            <h1>register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your Name"/>
                <input type="email" name="email" id="" placeholder="Email Address" required/>
           
                <input  type="password" name="password" id="" placeholder="Password" required/>
                <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;