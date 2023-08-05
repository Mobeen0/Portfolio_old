import './styleSheet/Navbar.css';
import logo from '../assets/myNewLogo.png';
import { Link,NavLink } from "react-router-dom";
import { useState } from 'react';
import { BiSolidUpArrow,BiSolidDownArrow } from 'react-icons/bi';
import menuBarItems from './config/menuBarItems';

function Navbar(){

    const totalItems = menuBarItems.length;
    let [arrowDir,setArrowDir] = useState(-1);

    const checkFunc = (navItem)=>{
        for(let i =0;i<totalItems;i++){
            if(navItem.target.innerText === menuBarItems[i].name){
                setArrowDir(i);
            }
        }
    }
    function onhover(navitem){
        checkFunc(navitem);
        if(navitem.target.closest('img') || navitem.target.closest('svg')){
            return;
        }
        navitem.target.style.background = 'white';
        navitem.target.style.color = 'black';
    }
    function leavehover(navitem){
        navitem.target.style.background = '';
        navitem.target.style.color= '';
        setArrowDir(-1);
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
                            {arrowDir === index?
                            <BiSolidUpArrow style ={{marginLeft:'4%',transition:'0.2s'}}/>:
                            <BiSolidDownArrow style ={{marginLeft:'4%',transition:'0.2s'}}/>}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;