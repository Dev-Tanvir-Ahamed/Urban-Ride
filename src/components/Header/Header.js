
import Logo from '../../images/Urban Riders.png'
import { Link } from 'react-router-dom';
import  './Header.css'
import { UserContext } from '../../App';
import { useContext } from 'react';

const Header = () =>{
    let [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
                  
                </div>
                    {
                        !loggedInUser.name && <li className="nav-item">
                        <Link className="nav-link btn btn-outline-primary p-2" to="/login">Login</Link>
                        </li>
                    }
                    {
                        loggedInUser.name &&  <li className="nav-item">
                          <Link className="nav-link btn btn-outline-primary p-2" to="/login">{loggedInUser.name} <img className="photo" src={loggedInUser.photo} alt=""/> </Link>
                          </li>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;