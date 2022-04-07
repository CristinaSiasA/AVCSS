import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./navbar.css"
import logo from '../../assets/images/logo.png'
import { Button } from './Button';

function MainMenu() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    const path= usePathname()

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'  className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logo} alt="AVCSS logo"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className={path==="/" ? "nav_links_active nav-links":"nav-links"} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className={path==="/about" ? "nav_links_active nav-links":"nav-links"} onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/solar' className={path==="/solar" ? "nav_links_active nav-links":"nav-links"} onClick={closeMobileMenu}>
                                Solar
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/wind' className={path==="/wind" ? "nav_links_active nav-links":"nav-links"} onClick={closeMobileMenu}>
                               Wind
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/education' className={path==="/education" ? "nav_links_active nav-links":"nav-links"} onClick={closeMobileMenu}>
                                Education Centre
                            </Link>
                        </li>
                        <li>
                            <Link to='/quote' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Request a Quote
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--primary' >Request a Quote</Button>}
                </div>
            </nav>
        </>
    );
}

export default MainMenu
