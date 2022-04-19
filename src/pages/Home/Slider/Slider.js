import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import teacher1 from '../../../images/teacher1.png'
import teacher2 from '../../../images/teacher2.png'
import teacher3 from '../../../images/teacher3.png'

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
                <Carousel.Caption>
                    <h1>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={teacher2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={teacher3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;