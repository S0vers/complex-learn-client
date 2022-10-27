import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import notFound from '../../../assets/pageNotFoundImage/404lost.jpg'
const Notfound = () => {
    return (
        <Card className="bg-dark text-white text-center">
            <Card.Img src={notFound} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>Are you lost?</Card.Title>
                    <Card.Text>
                        Wanna Go back to the Home Page?
                    </Card.Text>
                    <Button variant="danger"><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Go back to home</Link></Button>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Notfound;