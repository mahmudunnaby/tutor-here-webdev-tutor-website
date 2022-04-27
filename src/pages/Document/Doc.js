import React from 'react';
import { Card } from 'react-bootstrap';

const Doc = () => {
    return (
        <div id='Doc'>
            <h1>Document</h1>
            <div className='container'>
                <Card className='mb-5'>
                    <Card.Header as="h5">Question 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Difference between authorization and authentication</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5'>
                    <Card.Header as="h5">Question 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Difference between authorization and authentication</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5'>
                    <Card.Header as="h5">Question 3</Card.Header>
                    <Card.Body>
                        <Card.Title>Difference between authorization and authentication</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default Doc;