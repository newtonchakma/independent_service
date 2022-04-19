import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate();
    let errorElement;
    if (error) {
      
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
     
      }

      if(user){
        navigate('/home')
      }
    return (
       <div>
            <div className='d-flex align-items-center'>
            <div className="bg-primary w-50" style={{height: '1px'}}></div>
              <p className='mt-2 px-2'>OR</p>
              <div className="bg-primary w-50" style={{height: '1px'}}></div>
        </div>
        {errorElement}
        <div>
          <button
          onClick={()=> signInWithGoogle()}
           className="btn-primary w-50 d-block mx-auto fw-bold py-3 px-3 fs-5 rounded-2 fs-">Google Sign In</button>
        </div>
     </div>
    );
};

export default SocialLogin;