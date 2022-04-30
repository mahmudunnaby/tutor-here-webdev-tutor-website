import React from 'react';
import myPicture from '../../images/myPicture.png'
import style from './About.css'

const About = () => {
    return (
        <div className='bottom-margin d-flex justify-content-center bottom-top ' id='About'>
            <div className=" colour bg-dark card m-3 size  p-5 " >
                <h1 className='gray boder bg-dark'>About Me</h1>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={myPicture} className='img-fluid rounded-start' alt="" />
                    </div>

                    <div className="col-md-7">
                        <div className="card-body mt-5 py-5 ">
                            <h5 className="card-title">HELLO, I AM MAHMUDUN NABY</h5>
                            <p className="card-text text-alignment py-3"> I am ambecious for being a full-stack web devloper within upcomming two years. I have been working in fort-end devlopment for last 6 months. I am basically preparing myself in MARN stack. I believe with hardwork I would be able to acomplish my gole within the mentioned timeline. Afterwards I am willing to keep on my learning process and get myself up to date with the latest technology. </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;