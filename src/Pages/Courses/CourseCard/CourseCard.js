import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegEye, FaStar, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CourseCard = ({ courses }) => {
    const { summary, course_id, picture, time, Rating, title, totalview } = courses
    return (
        <Card className='h-100' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {summary}
                </Card.Text>
            </Card.Body>
            <Button className='mt-8' variant="primary"
                style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/coursedetail/${course_id}`}>Go to details</Link>
            </Button>
            <Card.Footer style={{ backgroundColor: 'none', border: 'none' }}
                className="text-muted">
                <div className='mt-20 d-flex justify-content-between'>
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{Rating}</span>
                    </div>
                    <div>
                        <FaClock className='me-2'></FaClock>
                        <span>{time}</span>
                    </div>
                    <div>
                        <FaRegEye className='me-2'></FaRegEye>
                        <span>{totalview}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;