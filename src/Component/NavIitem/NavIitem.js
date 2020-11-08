import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavIitem.module.css';


const NavIitem = ({id, name, link}) => {
    return (
        <li className={style.NavIitem}>
           <NavLink exact to={link} activeClassName={style.active}> {name} </NavLink> 
        </li>
    );
};

export default NavIitem;