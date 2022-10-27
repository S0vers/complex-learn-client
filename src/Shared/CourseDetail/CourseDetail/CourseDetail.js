import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegEye, FaStar, FaFilePdf } from 'react-icons/fa';
const CourseDetail = () => {
    const details = useLoaderData();
    console.log(details)
    const { course_id, Rating, detail, picture, time, title, totalview } = details[0]
    console.log(course_id, Rating, detail, picture, time, title, totalview);

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
                            <FaFilePdf className='me-2'></FaFilePdf>
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
        </div>
    );
};

export default CourseDetail;