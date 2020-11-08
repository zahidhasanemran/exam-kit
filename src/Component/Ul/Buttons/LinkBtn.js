import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './LinkBtn.module.css';


const LinkBtn = ({title, link}) => {
    return (
        <NavLink to={link} className={style.LinkBtn}>
            {title}
        </NavLink>
    );
};

export default LinkBtn;