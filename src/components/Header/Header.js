import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import Logo from '../../images/Urban Riders.png'
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
  let  [user, setUser] = useContext(UserContext)
  console.log(user);
    return (
        <div>
            <div className="container">
                <nav className="navbar">
                 <img src={Logo} className="logo" alt=""/>
                <div className="navbar-nav navigation">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Destination</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Login</Link>
                    </li>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;