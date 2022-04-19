import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = (props) => {

    const { checkout } = useParams()
    return (
        <div>

            <h1>Thanks considering service number {checkout}</h1>
        </div>
    );
};

export default Checkout;