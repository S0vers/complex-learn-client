import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Register = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
                setError('')
                navigate('/')
            })
            .catch(e => {
                setError(e.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Card style={{ width: '36rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>PhotoURL</Form.Label>
                            <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
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
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;