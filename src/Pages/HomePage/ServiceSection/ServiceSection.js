import React from 'react';
import style from './ServiceSection.module.css'
import mar from '../../../assets/Images/mar.svg';
import web from '../../../assets/Images/web.svg';
import mobile from '../../../assets/Images/mobile.svg';
import SingleService from '../../../Component/SingleService/SingleService';
import SectionTitle from '../../../Component/Ul/Titles/SectionTitle/SectionTitle';



const ServiceSection = () => {

    const services = [
        {
            id: 1, 
            title: 'Web Application', 
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis ad saepe aut nihil neque.',
            image: web
        },
        {
            id: 2, 
            title: 'Mobile Application', 
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis ad saepe aut nihil neque.',
            image: mobile
        },
        {
            id: 3, 
            title: 'Digital Marketing', 
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis ad saepe aut nihil neque.',
            image: mar
        }
    ]

    return (
        <div className={style.ServiceSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle title="Our Services"></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map(sm=> {
                        // console.log(sm);
                        return (<div className="col-lg-4" key={sm.id}>
                            <SingleService
                                title={sm.title}
                                details={sm.details}
                                image={sm.image}
                            />
                        </div>)
                    })}
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;