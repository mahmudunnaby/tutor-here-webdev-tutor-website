import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services'>

            <h2 className='text-center mt-5 mb-3 fs-1 fw-bold '>SERVICES</h2>
            <hr></hr>
            <div className='container '>
                <div className='row g-5 justify-content-center mt-3'>
                    {
                        services.map(service => <Service key={service.index} service={service}></Service>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;