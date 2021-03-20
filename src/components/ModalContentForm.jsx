//This is the form layout for the modal content. Contains name and password for now.

import { useEffect, useState } from "react";

//All imports here:
import instance from './axios';
import './stylesheets/form.css';
import CAPTCHA from './CAPTCHA';
const imgDataInit = [
    {
        "key":"Blueberry",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Blueberry.png"
    },
    {
        "key":"Chocolate",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Chocolate.png"
    },
    {
        "key":"Cinnamon",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Cinnamon.png"
    },
    {
        "key":"Orange",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Orange.png"
    },
    {
        "key":"Pistachio",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Pistachio.png"
    },
    {
        "key":"Strawberry",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Strawberry.png"
    },
    {
        "key":"Tealy",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Tealy.png"
    },
    {
        "key":"Vanilla",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Vanilla.png"
    },
    {
        "key":"Velvet",
        "src":"http://theesaan-enterprises-server.herokuapp.com/personal/data/visual-data/Velvet.png"
    }
]
//The component here:
const Form = ({filename, close}) => {
    function shuffle(array) {
        var ctr = array.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }
    //useState to store the file data:
    const [gotData, setData] = useState({});

    const [captchaVisible, setCaptchaVisibility] = useState(false);

    useEffect(() => {
        //calling the file's data. 
        instance(`/${filename.replace(" ", "%20")}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[filename]);

    //useState to store form data:
    const [formData, setFormData] = useState([]);
    const [imgData, setImgData] = useState(imgDataInit)

    // {gotData.formInputFields?.map(elem => {
    //     setFormData(oldArray => )
    // })}

    console.log(formData)

    return(
        <div className="__te_onlineBanking__Form">
            <p>{gotData.para}</p>
            <form>
                {gotData?.formInputFields?.map(elem => {return(
                <span key = {elem.key}>
                    <label htmlFor= {elem.id}>{elem.labelText}</label>
                    <input readOnly = {true} type= {elem.inputType} required id = {elem.id} placeholder = {elem.placeholder} name = {elem.name}/>
                </span>)
                })}
                <CAPTCHA open = {captchaVisible} close = {() => setCaptchaVisibility(false)} closeForm = {close} imgData = {imgData}/>
                <button onClick = {e => {
                    setImgData(shuffle(imgDataInit));
                    localStorage.setItem('alerted','no');
                    e.preventDefault();
                    setCaptchaVisibility(true);
                }} type = {"submit"}>Submit</button>
            </form>
        </div>
    )
}

//Export component here:
export default Form;