import React from 'react';
import source from '../../../images/source.webp'

const Notfound = () => {
    return (
        <div>
            <h1 className='mt-5 '>404 Page not found</h1>
            <img src={source} alt="" />
        </div>
    );
};

export default Notfound;