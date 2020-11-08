import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Component/Ul/Input/Input';
import InputFile from '../../Component/Ul/InputFile/InputFile';
import { SaveRegData } from '../../Store/Registration/RegCreator';
import style from "./RegistrationPage.module.css";



const Registration = (props) => {

    const dispatch = useDispatch();

    const [oname, setName] = useState('');
    const [oemail, setEmail] = useState('');
    const [oprofile, setProfile] = useState('');
    const [oidcard, setIdCard] = useState('');
    
    const imgDelHandeler = (imgHandlerFunction,name,e) => {
        e.preventDefault();
        imgHandlerFunction([]);
        document.getElementById(name).value = ''
    }
   
    const regSubmit = (e) => {
        e.preventDefault();
        dispatch(SaveRegData({oname,oemail,oprofile,oidcard}));
        props.history.push('/')

    }
    

    

    return (
        <div className={style.Registration}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        
                        <div className={style.formWrapper}>
                            <h4>Register</h4>
                            <form onSubmit={(e) => regSubmit(e)}>
                                <div className={style.single_input}>
                                    <Input type="text" placeholder="Name" chengeMethod={setName} data={oname} />
                                </div>
                                <div className={style.single_input}>
                                    <Input type="email" placeholder="Email" chengeMethod={setEmail} data={oemail} />
                                </div>
                                <div className={style.single_input}>
                                    <InputFile deleteImgHandler={imgDelHandeler} setImgHandeler={setProfile} name="oprofile" img={oprofile} />
                                </div>
                                <div className={style.single_input}>
                                    <InputFile deleteImgHandler={imgDelHandeler} setImgHandeler={setIdCard} name="oidcard" img={oidcard} />
                                </div>
                                <div className={`${style.single_input} text-center`}>
                                    <button type="submit" className="LinkBtn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;