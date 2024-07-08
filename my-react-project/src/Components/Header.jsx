import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const handleReload = (path) => {
        window.location.href = path;
    };


    return (
        <header className="Header">
            <h1 className="Name">
                Gerwin Delsocora Mateo
            </h1>
            <nav>
                <ul className="NavbarList">
                    <li>
                        <Link 
                            className={`Navbar ${activeLink === '/' ? 'active' : ''}`} 
                            to="/" 
                            onClick={() => handleClick('/')}
                        >
                            Home
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
