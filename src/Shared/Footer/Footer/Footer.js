import React from 'react';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/companyLogo/Logo.png'
const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 mt-4' style={{ backgroundColor: '#5bbcfc' }}>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-item-center justify-content-center'>
                            <img src={logo} className='mx-2' alt="" width='150' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='mb-2 text-center'><h3>Complex Learn</h3></li>
                            <li className='text-center'><p>We are here to teach you all about programming.</p></li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='mb-2 text-center'><h3>Our Services</h3></li>
                            <li className='text-center'><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/courses'>Courses</Link></li>
                            <li className='text-center'><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/blog'>Blog</Link></li>
                            <li className='text-center'><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/faq'>FAQs</Link></li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='mb-2 text-center'><h3>Visit us on</h3></li>
                            <li className='mt-4 d-flex justify-content-between'>
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaTwitch></FaTwitch>
                                <FaYoutube></FaYoutube>
                                <FaInstagram></FaInstagram>
                            </li>
                        </ul>
                        <div className='container'>
                            <p className='text-center'><small><FaCopyright></FaCopyright> Copyright 2022</small></p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;