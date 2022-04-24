import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>Thanks considering service number {serviceId}</h1>


            <div className='mb-5 mt-5'>
                <Link to="/checkout">
                    <button className='btn btn-primary'> Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;


