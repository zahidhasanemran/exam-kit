import React from 'react';
import NavIitem from '../../Component/NavIitem/NavIitem';
import Logo from '../../Component/Logo/Logo';
import style from './Navbar.module.css'


const Navbar = () => {
    
    const menus = [
        {id: 1, name: 'Home', link: '/'},
        {id: 2, name: 'Product', link: '/product'},
        {id: 3, name: 'Register', link: '/register'}
    ]


    return (
        <div className={style.Navbar}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={style.navWrapper}>
                            <div className={style.logo}>
                                <Logo />
                            </div>
                            <div className={style.navMenu}>
                                <ul>
                                    {menus.map(mn => {
                                        return <NavIitem id={mn.id} name={mn.name} link={mn.link} key={mn.id} />
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;