import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate
    let errorText
    if (error) {
        errorText =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }
    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mb-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            {errorText}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50'>
                    <img className='w-25 p-3' src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;