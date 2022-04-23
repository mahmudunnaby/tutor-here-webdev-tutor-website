import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()
    const nameRef = useRef('')
    const passwordRef = useRef('')
    const emailRef = useRef('')

    const navigateLogin = (event) => {
        navigate('/login')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value


        console.log(email, password, name);
    }



    return (
        <div>
            <div className='container w-50 mx-auto space'>
                <h1 className='text-primary mt-5'>Register Page</h1>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='mb-5' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already Registered? <span className='text-danger' onClick={navigateLogin}>Please Login </span> </p>




            </div>

        </div>
    );
};

export default Register;