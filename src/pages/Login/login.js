import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.css'


const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log(email, password);

    }

    const navigateRegister = (event) => {
        navigate('/register')

    }

    return (
        <div className='container w-50 mx-auto space'>
            <h1 className='text-primary mt-5'>Login Page</h1>
            <Form onSubmit={handleSubmit} className='mt-5 mb-5 p-5 border border-primary border-3 rounded '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mb-5' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New at Tutor Here? <span className='text-danger' onClick={navigateRegister}>Please Register </span> </p>




        </div>
    );
};

export default Login;