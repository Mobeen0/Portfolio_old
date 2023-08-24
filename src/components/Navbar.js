import './styleSheet/Navbar.css';
import logo from '../assets/myNewLogo.png';
import { Link,NavLink } from "react-router-dom";
import menuBarItems from './config/menuBarItems';
import {FaBars} from 'react-icons/fa';
import {FaX} from 'react-icons/fa6';
import {useState} from 'react';
function Navbar(props){

    let [hammer,setHammer] = useState(false);

    let resetHammer = ()=>{
        if(hammer){
            setHammer(false);
        }
    }


    return(
        <nav className = {`Navigation ${props.navBool?`shad`:``} ${hammer? `mobileNav`:``}`}>
            <ul className = {`list1 ${hammer?`mobileNav`:``}`}>
            <li className = "logoitem" >
                    <Link className = "logoitemLink" to = '/'>
                        <div className = "logoFit">
                            <img src = {logo} className ="logo" alt = "Company Logo"></img>
                        </div>
                    </Link>
            </li>
            </ul>
                <div className = {`hammerDown ${hammer? `mobileNav`:``}`} onClick = {()=>{setHammer(!hammer)}}>
                    {hammer?<FaX />:<FaBars />}
                </div>
            <ul className = {`list2 ${hammer?`mobileNav`:``}`}>
                {
                menuBarItems.map((item,index) =>(
                    <li className = "Navbaritem">
                        <NavLink className = "item" activeClassName = {hammer? "":"active"} to = {item.path} onClick = {resetHammer}>
                            <span className = "navIcon">
                                {item.icon}
                            </span>
                            <span className="navText">
                                {item.name}
                            </span>
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;