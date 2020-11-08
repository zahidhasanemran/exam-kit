import React, { useState } from 'react';
// import Input from '../Ul/Input/Input';
import style from './Modal.module.css';
import { FaTimesCircle } from "react-icons/fa";


const Modal = (props) => {

    const [title,setTitle] = useState('');

    return (
        <div className={`${style.ModalWrapper} ${props.shown ? `${style.modalOpen}` : `${style.modalClose}` }`}>
            <div className={style.ModalSection}>
                <div className={style.Modal}>
                    <div className={style.header}>
                        <p className="text-right">
                            <FaTimesCircle onClick={(e)=>props.clicked(e)}></FaTimesCircle>
                        </p>
                    </div>
                    <div className={style.body}>
                        <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} />
                        <button className="LinkBtn" type="submit" onClick={(e)=>props.titleReq(e,title)}>Add</button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;