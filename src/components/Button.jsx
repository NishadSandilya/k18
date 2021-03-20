//This is the button component for the app. This accepts a child and calls a modal

//All imports here:
import './stylesheets/button.css';
import Modal from './Modal';
import {useState} from 'react';

//The Button component here:
const Button = ({children, initialType}) => {

    //useState for modal visibility toggle:
    const [modalVisible, setModalVisibility] = useState(false);    

    return(
        <>
        <button onClick = {() => setModalVisibility(true)} className = "__te_onlineBanking__Button">{children}</button>
        <Modal filename = {children} type = {initialType} open = {modalVisible} close = {() => setModalVisibility(false)}/>
        </>
    )
}

//Export Button:
export default Button;