import React from 'react';
import style from './InputFile.module.css'
// import img from '../../../assets/Images/team-01.jpg'
import { FaTimesCircle } from "react-icons/fa";

const InputFile = ({img, setImgHandeler, deleteImgHandler, name, }) => {

    

    return (
        <div className={style.InputFileWrapper}>
            <input 
                type="file" 
                name={name} 
                id={name}
                className={style.InputFile} 
                onChange={(e) => setImgHandeler(URL.createObjectURL(e.target.files[0]))} 
            />
            <div className={style.img_wrapper}>
                <img src={img} alt=""/>
            </div>
            <div className={`${style.crosBtn} ml-auto`}>
                <button type="submit" onClick={(e)=>deleteImgHandler(setImgHandeler,name,e)}> <FaTimesCircle></FaTimesCircle> </button>
            </div>
        </div>
    );
};

export default InputFile;