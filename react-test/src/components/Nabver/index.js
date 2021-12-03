import React, { useState} from 'react'
import { FaIcons } from 'react-icons/fa'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink} from './NavbarElements'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
const Navber = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
         <Nav>
             <NavLink to="/">
                 <h1 style={{color: '#000'}}>Logo</h1>
             </NavLink>
             <Bars to ="#" className="menu-bar">
                 <FaIcons.FaBars onClick={showSidebar}/>
             </Bars>
             <NavMenu>
                 <NavLink to="/home" activeStyle>
                     Home
                 </NavLink>
                 <NavLink to="/menu" activeStyle>
                     Menu
                 </NavLink>
                 <NavLink to="/about" activeStyle>
                     About
                 </NavLink>
                 <NavLink to="/official" activeStyle>
                     Official
                 </NavLink>
                 
                 <NavBtnLink to="/signin">Sign In</NavBtnLink>
             </NavMenu>
         </Nav>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className='nav-menu-items'>
                 <li className="navbar-toggle">
                    <Bars to ="#" className="menu-bar">
                        <AiIcons.AiOutlineClose />
                    </Bars>
                 </li>
                 {SidebarData.map((item, index) => {
                     return (
                         <li key={index} className={item.cName}>
                             <Bars to ={item.path}>
                                 {item.icon}
                                 <span>{item.title}</span>
                             </Bars>
                         </li>
                     )
                 })}
             </ul>
         </nav>
        </>
    );
}

export default Navber;
