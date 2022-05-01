import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import teacher1 from '../../../images/teacher1.png'
import teacher2 from '../../../images/teacher2.png'
import teacher3 from '../../../images/teacher3.png'
import style from './Slider.css'

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>

                <img
                    className="d-block w-100 h-50"
                    src={teacher1}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h1 >HIRE ME</h1>
                    <p>Learn Web Development from the best tutor!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={teacher2}
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3 >UNLISH YOUR CREATIVATY</h3>
                    <p>Make your imagination come true</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={teacher3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 >GET ENROLED NOW!</h3>
                    <p>Get yourself booked for the next batch</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;