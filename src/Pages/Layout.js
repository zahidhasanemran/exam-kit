import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Container/Navbar/Navbar'


const Layout = (props) => {

    let x = useSelector(state => state.RegReducer);
    console.log(x);

    return (
        <div className="dummy">
            <Navbar></Navbar>
            {props.children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;