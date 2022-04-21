import React from 'react';
import './layout.css';
import { Link } from 'react-router-dom';
import Logo_NCI from '../../assets/images/NCI_Logo_white.png'

function Footer() {
    return (
        <div className='footer-container'>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>Mission</Link>
                        <Link to='/about'>Team</Link>

                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/quote'>Contact</Link>
                        <Link to='/education'>Learn More</Link>

                    </div>

                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <a
                            className='social-logo'
                            href='https://www.ncirl.ie/'
                            target='_blank'
                            rel="noreferrer"
                        >
                            <img src={Logo_NCI} alt={'Logo NCI'} />
                        </a>
                    </div>
                    <small className='website-rights'> Daniel O'Driscoll © Cristina Sias 2022</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link youtube'
                            href='https://www.youtube.com/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='https://twitter.com/feed'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/feed/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;