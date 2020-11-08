import React from 'react';
import style from './SingleService.module.css'

const SingleService = ({title, details, image}) => {
    console.log(title);
    return (
        <div className={style.SingleService}>
            <div className={`${style.img_wrapper} mb-2`}>
                <img src={image} alt=""/>
            </div>
            <h5 className="my-3"> {title} </h5>
            <p className={style.service_title}> {details} </p>
        </div>
    );
};

export default SingleService;