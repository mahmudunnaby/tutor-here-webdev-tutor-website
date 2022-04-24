import React from 'react';
import google from '../../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mb-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            <div>
                <button className='btn btn-primary w-50'>
                    <img className='w-25 p-3' src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;