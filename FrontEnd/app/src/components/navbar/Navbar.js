import React, {useState} from "react";
import './Navbar.css';
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaRegTimesCircle} from "react-icons/fa";
import {BsFillHouseFill} from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill /> Tiny Home </span>Paradise</h1>
                <Link to="/login"><button className='btn'>Login</button></Link>
                <Link to="/signup"><button className='btn'>Register</button></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/">Home</Link></li>
                    <li>Search</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar