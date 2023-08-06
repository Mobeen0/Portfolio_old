import './styleSheet/Navbar.css';
import logo from '../assets/myNewLogo.png';
import { Link,NavLink } from "react-router-dom";
import menuBarItems from './config/menuBarItems';

function Navbar(){


    function onhover(navitem){
        if(navitem.target.closest('img') || navitem.target.closest('svg')){
            return;
        }
        navitem.target.style.background = 'white';
        navitem.target.style.color = 'black';
    }
    function leavehover(navitem){
        navitem.target.style.background = '';
        navitem.target.style.color= '';
    }


    return(
        <nav className = "Navigation">
            <ul>
            <li className = "logoitem" >
                    <Link className = "item" to = '/'>
                    <img className = "logo" src = {logo} alt = "Company Logo"></img></Link>
            </li>
                {
                menuBarItems.map((item,index) =>(
                    <li className = "Navbaritem">
                        <NavLink className = "item" activeClassName = "active" to = {item.path} onMouseOver = {onhover}
                        onMouseLeave = {leavehover}>
                            {item.icon}
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