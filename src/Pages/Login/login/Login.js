import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn, setloading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => setError(error.message))
    }
    const handleGithubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => setError(error.message))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your Email is not verified. Please verify.')
                }
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setloading(false)
            })
    }

    return (
        <div className='mt-4 col d-flex justify-content-center'>
            <Card style={{ width: '36rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                            <Form.Text className="text-muted">
                                New to the website? <Link to='/register'>Register Now</Link>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" style={{ textDecoration: 'none', backgroundColor: '#5bbcfc', border: 'none' }} type="submit">
                            Login
                        </Button>
                        <br></br>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                        <div>
                            <ButtonGroup className='my-2'>
                                <Button onClick={handleGoogleSignIn} className='mx-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login in with Google</Button>
                                <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub>  Login in with Github</Button>
                            </ButtonGroup>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;