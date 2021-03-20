//This is the landing page of the online banking app. This contains three buttons, existing user login, new user registration and admin access

//All imports here:
import './stylesheets/landing-page.css';
import Button from './Button';
import instance from './axios';
import { useEffect, useState } from 'react';

//The primary component here:
const LandingPage = () => {

    //useState for storing simple axios responses.
    const [btnData, setBtnData] = useState([]);

    useEffect(() => {
        //calling the landing-page-button data. 
        instance('/landing-page-buttons')
        .then(res => setBtnData(res.data)
        )
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="__te_onlineBanking__LandingPage">
            {btnData.map(elem => <Button key = {elem.id} children = {elem.children} initialType = {elem.initialType}/>)}
        </div>
    )
}

//Exporting Components here:
export default LandingPage;