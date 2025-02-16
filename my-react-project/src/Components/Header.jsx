import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./Header.css"


function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleReload = (path) => {
        window.location.href = path;
    };

    return (
        <header className="Header">
            <h1 class="Name">
                <Link className="Name"
                    to="/"
                    >
                    Gerwin Delsocora Mateo
                </Link>
                
            </h1>
            <nav>
                <ul className="NavbarList">
                    <li>
                        <Link 
                            className={`Navbar ${activeLink === '/about' ? 'active' : ''}`} 
                            to="/about" 
                            onClick={() => handleClick('/about')}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`Navbar ${activeLink === '/project' ? 'active' : ''}`} 
                            to="/project" 
                            onClick={() => handleClick('/project')}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`Navbar ${activeLink === '/resume' ? 'active' : ''}`} 
                            onClick={() => handleReload('/resume')}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
