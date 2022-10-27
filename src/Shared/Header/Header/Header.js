import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/companyLogo/Logo.png'
import Nav from 'react-bootstrap/Nav';
import { FaUser } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import './Header.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user?.uid)
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>

            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#5bbcfc' }} variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Complex Learn
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2 my-2 linkFixer' to='/'>Home</Link>
                            <Link className='mx-2 my-2 linkFixer' to='/courses'>Courses</Link>
                            <Link className='mx-2 my-2 linkFixer' to='/faq'>FAQ</Link>
                            <Link className='mx-2 my-2 linkFixer' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            <Form className='mx-2 my-2 linkFixer'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                />
                            </Form>
                            {
                                user?.uid ?
                                    <p className='mx-2 my-2 linkFixer hoverP' onClick={handleLogOut} >Logout</p>
                                    :
                                    <>
                                        <Link className='mx-2 my-2 linkFixer' to='/login'>Login</Link>
                                        <Link className='mx-2 my-2 linkFixer' to='/register'>Register</Link>
                                    </>

                            }
                            <Link className='mx-2 my-2 linkFixer' to='/' data-toggle="tooltip" data-placement="bottom" title="User Name">
                                <FaUser></FaUser>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;