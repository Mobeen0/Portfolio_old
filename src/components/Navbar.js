import './styleSheet/Navbar.css';
import logo from '../assets/myNewLogo.png';
import { Link,NavLink } from "react-router-dom";
import menuBarItems from './config/menuBarItems';

function Navbar(){


    return(
        <nav className = "Navigation">
            <ul>
            <li className = "logoitem" >
                    <Link className = "logoitemLink" to = '/'>
                    <img className = "logo" src = {logo} alt = "Company Logo"></img></Link>
            </li>
                {
                menuBarItems.map((item,index) =>(
                    <li className = "Navbaritem">
                        <NavLink className = "item" activeClassName = "active" to = {item.path}>
                            <span className = "navIcon">
                                {item.icon}
                            </span>
                                {item.name}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;