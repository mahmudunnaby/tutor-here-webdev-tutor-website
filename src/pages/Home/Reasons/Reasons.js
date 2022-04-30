import React from 'react';
import { Accordion } from 'react-bootstrap';
import style from './Reasons.css'

const Reasons = () => {
    return (
        <div>
            <h1 className='mb-5'>WHY WEB DEV?</h1>
            <hr></hr>
            <div className='container'>

                <Accordion className='mb-5' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header > <h5 className=' p-2 '>You Can Work at an Awesome Tech Company</h5></Accordion.Header>
                        <Accordion.Body>
                            Tech is where to be right now. Because there is such a high demand for web developers and so little trained developers to fill those positions, tech companies are doing an excellent job at making work like very comfortable, if not enjoyable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h5 className=' p-2 '>A Great Income</h5></Accordion.Header>
                        <Accordion.Body>
                            According to U.S. News & World Report, certified professional web developers earn an average salary of $64,970 nation wide. Salary shouldn’t be the only factor when deciding whether or not to learn web development, but it should be taken into consideration.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h5 className=' p-3 '>You Can Work From Anywhere</h5></Accordion.Header>
                        <Accordion.Body>
                            Have freedom to work whenever you want from wherever—imagine that. All you need for web development is the internet and a laptop. Not all jobs are remote, but if that is your preference, there are remote jobs out there for you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h5 className=' p-3 '>It’s Creative and Fun</h5></Accordion.Header>
                        <Accordion.Body>
                            Web development gives you the opportunity to express yourself creatively on the internet. If you have an idea you would like to try as you discover your web dev skills, try it out. Web dev is a fun, creative experience.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>

    );
};

export default Reasons;