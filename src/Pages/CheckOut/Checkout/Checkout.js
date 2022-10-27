import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
const Checkout = () => {
    const details = useLoaderData();
    const { Rating, summary, picture, title } = details[0]
    const handleCourseBuy = () => {
        toast.success('Course Bought successfully.')
    }
    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Card className='' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex justify-content-between mb-4">

                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <span>{Rating}</span>
                        </div>
                    </div>
                    <Card.Text>
                        <>
                            {summary}
                        </>
                        <p className='mt-4'>Price:$199</p>
                    </Card.Text>
                    <Button onClick={handleCourseBuy} style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }} hover='' variant="primary">Buy the course.</Button>
                </Card.Body>
            </Card >
        </div>
    );
};

export default Checkout;