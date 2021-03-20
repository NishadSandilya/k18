//This is the popup modal container for the app.

//All imports here:
import './stylesheets/modal.css';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './ModalContentMessage';
import Form from './ModalContentForm';
import CAPTCHA from './CAPTCHA';
//The Modal component here:
const Modal = ({filename, type, open, close}) => {
    //useState to update type of modal content dynamically at runtime:
    const [self_type, setSelf_type] = useState(type);

    //contidional renderer based on type change
    const Selector = ({filename, close}) => {
        if(self_type === 'form')
            return <Form filename = {filename} close = {close}/>
        else
            return <Message filename = {filename} close = {close}/>
    }

    if(!open)
        return null;
    return ReactDOM.createPortal(
        <div className="__te_onlineBanking__Modal">     
            <div className="content">
            <button id = "closeBtn" onClick = {close}>Close</button>
            <Selector filename = {filename} close = {close}/>
            </div>
        </div>,document.getElementById('__te_onlineBanking__popupPortal')
    )
}

//Export Modal here:
export default Modal;