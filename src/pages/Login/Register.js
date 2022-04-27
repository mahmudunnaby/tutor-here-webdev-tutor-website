import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate()
    const nameRef = useRef('')
    const passwordRef = useRef('')
    const emailRef = useRef('')
    const [agree, setAgree] = useState(false)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = (event) => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value


        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile')
        navigate('/home')




        console.log(email, password, name);
    }



    return (
        <div>
            <div className='container w-50 mx-auto space'>
                <h1 className='text-primary mt-5'>Register</h1>
                <Form onSubmit={handleSubmit} className='mt-5 mb-5 p-5 border border-primary border-3 rounded '>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <div>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className='px-3' htmlFor='terms'>Accept Terms and Conditions</label>
                    </div>

                    <Button
                        disabled={!agree}
                        className='mb-5 mt-5' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already Registered? <span className='text-danger' onClick={navigateLogin}>Please Login </span> </p>
                <SocialLogin></SocialLogin>



            </div>

        </div>
    );
};

export default Register;