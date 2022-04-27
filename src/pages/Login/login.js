import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import style from './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorText;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorText = <p>Error: {error.message}</p>


    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)

        console.log(email, password);

    }

    const navigateRegister = (event) => {
        navigate('/register')

    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }
    }

    return (
        <div className='container w-50 mx-auto space'>
            <h1 className='text-primary mt-5'>Login</h1>
            <Form onSubmit={handleSubmit} className='mt-5 mb-5 p-5 border border-primary border-3 rounded '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-5' variant="primary" type="submit">
                    Login
                </Button>
                {errorText}
            </Form>
            <p>New at Tutor Here? <span className='text-primary' onClick={navigateRegister}>Please Register </span> </p>
            <p>Forget Password? <span className='text-primary' onClick={resetPassword}>Reset Password </span> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />



        </div>
    );
};

export default Login;