import React from 'react';
import style from './Input.module.css'


const Input = ({type, placeholder, chengeMethod}) => {
    return (
        <input className={style.Input} type={type} placeholder={placeholder} onChange={(event) => chengeMethod(event.target.value)}/>
    );
};

export default Input;