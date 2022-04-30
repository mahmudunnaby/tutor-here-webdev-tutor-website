import React from 'react';
import { Card } from 'react-bootstrap';

const Doc = () => {
    return (
        <div className='container' id='Doc'>
            <h1 className='mb-5 mt-5 gray text-white'>Document</h1>
            <div className='container'>
                <Card className='mb-5 bg-dark text-white'>
                    <Card.Header as="h5">QUESTION 1</Card.Header>
                    <Card.Body className='p-5'>
                        <Card.Title>Difference between authorization and authentication</Card.Title>
                        <Card.Text>
                            <strong>"Authentication"</strong> is the process of verifying who someone is this process validates a user's identity, whereas <br></br> <strong>"Authorization"</strong> is the process of verifying what specific applications, files, and data a user has access to.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5 bg-dark text-white'>
                    <Card.Header as="h5">QUESTION 2</Card.Header>
                    <Card.Body className='p-5'>
                        <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                        <Card.Text>
                            Firebase is Backend-as-a-Service (Baas). It is a NoSQL database program. I am using using firebase both for authentication and authorization purposes. Aside this firebase is also used for the hosting purpose.
                            <br />
                            <br />
                            <strong>Other Options</strong>
                            <br />
                            <ul className='d-md-flex justify-content-center '>
                                <li className='mx-3'>Back4App</li>
                                <li className='mx-3'>Parse</li>
                                <li className='mx-3'>AWS Amplify</li>
                                <li className='mx-3'>Backendless</li>
                                <li className='mx-3'>Kuzzle</li>
                                <li className='mx-3'>Supabase</li>
                            </ul>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5 bg-dark text-white'>
                    <Card.Header as="h5">QUESTION 3</Card.Header>
                    <Card.Body className='p-5'>
                        <Card.Title>What other services does firebase provide other than authentication</Card.Title>
                        <Card.Text>
                            <div className=''>
                                <div className='row'>
                                    <Card className='m-1 col-md-1 col-lg-3 bg-dark text-white' border="primary" style={{ width: '18rem' }}>
                                        <Card.Header><Card.Title>Cloud Firestore</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                It is a NoSQL document database.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='m-1 col-md-2 col-lg-3 bg-dark text-white' border="primary" style={{ width: '18rem' }}>
                                        <Card.Header><Card.Title>Cloud Functions</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                It is a scalable, pay-as-you-go functions as a service (FaaS)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='m-1 col-md-2 col-lg-3 bg-dark text-white' border="primary" style={{ width: '18rem' }}>
                                        <Card.Header><Card.Title>Google Analytics</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                This feature is used for collecting information about site visitors
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='m-1 col-md-2 col-lg-3 bg-dark text-white' border="primary" style={{ width: '18rem' }}>
                                        <Card.Header><Card.Title>Cloud Messaging</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                            </div>


                            <p className='mt-3'> <strong>Other Major Services</strong>  </p>
                            <ul className='d-flex justify-content-center '>
                                <li className='mx-3'>Hosting</li>
                                <li className='mx-3'>Predictions</li>
                                <li className='mx-3'>Remote Config</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default Doc;