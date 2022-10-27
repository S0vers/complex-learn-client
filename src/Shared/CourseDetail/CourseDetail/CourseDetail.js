import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegEye, FaStar, FaFilePdf } from 'react-icons/fa';
import ReactPrint from 'react-to-print';
import Notfound from '../../NotFound/NotFound/Notfound';
const CourseDetail = () => {

    const details = useLoaderData();
    const ref = useRef();
    if (!details[0]) {
        return <Notfound></Notfound>;
    }
    const { course_id, Rating, detail, picture, time, title, totalview } = details[0]

    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Card className='' style={{ width: '64rem' }}>
                <Card.Img style={{ height: '20rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <div>
                                <Card.Title>{title}</Card.Title>
                            </div>
                        </div>
                        <div>
                            <ReactPrint trigger={() => <FaFilePdf className='me-2'></FaFilePdf>} content={() => ref.current} />
                        </div>
                    </Card.Header>
                    <div className="d-flex justify-content-between mb-4">
                        <div>
                            <FaRegEye className='me-2'></FaRegEye>
                            <span>{time}</span>
                        </div>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <span>{Rating}</span>
                        </div>
                        <div>
                            <FaRegEye className='me-2'></FaRegEye>
                            <span>{totalview}</span>
                        </div>
                    </div>
                    <Card.Text>
                        <>
                            {detail}
                        </>
                    </Card.Text>
                    <Link to={`/checkout/${course_id}`}><Button style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }} hover='' variant="primary">Get Premium access</Button></Link>
                </Card.Body>
            </Card >
            <div className='d-none'>
                <Card ref={ref}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="d-flex justify-content-between mb-4">
                            <div>
                                <FaRegEye className='me-2'></FaRegEye>
                                <span>{time}</span>
                            </div>
                            <div>
                                <FaStar className='text-warning me-2'></FaStar>
                                <span>{Rating}</span>
                            </div>
                            <div>
                                <FaRegEye className='me-2'></FaRegEye>
                                <span>{totalview}</span>
                            </div>
                        </div>
                        <Card.Text >
                            <>
                                {detail}
                            </>
                        </Card.Text>
                    </Card.Body>
                </Card >
            </div>
        </div >
    );
};

export default CourseDetail;