import React from 'react';
import SingleTeam from '../../../Component/SingleTeam/SingleTeam';
import t1 from '../../../assets/Images/team-01.jpg'
import t2 from '../../../assets/Images/team-03.jpg'
import t3 from '../../../assets/Images/team-05.jpg'
import t4 from '../../../assets/Images/team-07.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './TeamSlider.module.css'
import Slider from "react-slick";
import SectionTitle from '../../../Component/Ul/Titles/SectionTitle/SectionTitle';




const TeamSlider = () => {

    const team = [
        {id: 1, name: 'Alamgir Hossain', desig: 'Font End Developer', image: t1 },
        {id: 2, name: 'Shuvo Khan', desig: 'Back End Developer', image: t2 },
        {id: 3, name: 'Rasel Ahmed', desig: 'Cheif Executive Officer', image: t3 },
        {id: 4, name: 'Zonayed Bepari', desig: 'Full Stack Developer', image: t4 },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className:"mx-3"
      };

    return (
        <div className={style.TeamSlider}>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <SectionTitle title="Our Team Member"></SectionTitle>
                    </div>
                </div>
                <div className="col-lg-12 mb-5">
                    <Slider {...settings}>
                        {team.map(tm => {
                            return <SingleTeam
                                name={tm.name}
                                image={tm.image}
                                desig={tm.desig}
                                key={tm.id}
                            />
                        })}
                    </Slider>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TeamSlider;