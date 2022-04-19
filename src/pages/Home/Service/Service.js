import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './Service.css'

const Service = ({ service }) => {

    const { index, balance, picture, subject, name, about } = service
    const navigate = useNavigate()
    const navToHandleCheckout = (id) => {
        navigate(`/service/${id}`)

    }
    return (


        <Card className='effects col-12 col-sm-12 col-md-3 col-lg-4  m-5 effects' style={{ width: '20rem', height: '45rem' }}>
            <Card.Img className='picture mt-3 rounded mx-auto d-block' variant="top" src={picture} />
            <br />
            <Card.Body>
                <Card.Title>{subject}</Card.Title>
                <Card.Title className='badge bg-primary fs-4'>{balance}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
                <Card.Text>
                    Instructor: {name}
                </Card.Text>
                <Button onClick={() => navToHandleCheckout(index)} variant="primary" >Check Out</Button>
            </Card.Body>
        </Card>



    );
};

export default Service;