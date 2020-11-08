import React from 'react';
import style from './HeroSection.module.css'
import heroImg from '../../../assets/Images/hero.svg'
import LinkBtn from '../../../Component/Ul/Buttons/LinkBtn';


const HeroSection = () => {

    

    return (
        <div className={style.HeroSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={style.heroLeft}>
                            <h2 className="mb-3">Get Your Digital Existence with Us</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio modi repudiandae sed?</p>
                            <h6 className="mb-4">PLAN . EXECUTE . SOLUTON . SUCCESS</h6>
                            <LinkBtn title="What We Offer" link="/"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={style.heroRight}>
                            <div className={style.heroImgWrapper}>
                                <img src={heroImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;