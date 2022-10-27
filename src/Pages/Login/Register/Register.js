import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Card style={{ width: '36rem' }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="email" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>PhotoURL</Form.Label>
                            <Form.Control name='PhotoURL' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                            <Form.Text className="text-muted">
                                Already a user? <Link to='/login'>Login</Link>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }} type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;