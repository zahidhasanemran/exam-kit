import React from 'react';
import style from './SingleTeam.module.css';

const SingleTeam = ({name, desig, image}) => {
    return (
        <div className={style.SingleTeam}>
            <div className={style.img_wrpper}>
                <img src={image} alt=""/>
            </div>
            <h6 className={`${style.name} mt-3`}>
                {name}
            </h6>
            <p className={style.desig}><strong> {desig} </strong></p>
        </div>
    );
};


export default SingleTeam;