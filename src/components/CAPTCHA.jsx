import { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import './stylesheets/CAPTCHA.css';
// import { useSpring, animated, config, interpolate } from "react-spring";
const CAPTCHA = ({ open, close, closeForm, imgData }) => {
    const [token, setToken] = useState();

    const validatorRef = useRef();
    const splitBox_unoRef = useRef();
    const splitBox_dousRef = useRef();
    const imgContainerDraggablesRef = useRef();
    const count = useRef(0);
    
    useLayoutEffect(() => {
        setToken(imgData[Math.floor(Math.random()*9)].key)
        validatorRef.current?.addEventListener("dragover", (e) => {
        e.preventDefault();
        validatorRef.current?.appendChild(document.querySelector('.dragged'));
        if (validatorRef.current?.children[0].children[0].innerHTML === token)
            count.current = 1;
        else{
            count.current = 0;
        }
        });
        splitBox_unoRef.current?.querySelectorAll(".imgContainerDraggables").forEach(elem => {
            elem.addEventListener('dragstart', e => {
                count.current = 0;
                elem.classList.add('dragged');
            })
            elem.addEventListener('dragend', e => {
                elem.classList.remove('dragged');
                if(count.current > 0){
                    var alerted = localStorage.getItem('alerted') || '';
                    if (alerted != 'yes') {
                    alert("CAPTCHA VERIFIED! Form Submitted");
                    localStorage.setItem('alerted','yes');
                    }
                    close();
                    closeForm();
                }
                    else{
                    var alerted = localStorage.getItem('alerted') || '';
                    if (alerted != 'yes') {
                    alert("CAPTCHA VERIFICATION FAILED! Try Again");
                    localStorage.setItem('alerted','yes');
                    }
                    close();
                }
            })
        })
    });
    if (!open) return null;
    return ReactDOM.createPortal(
        <div className="modal">
        <img width = "24px" onClick = {close} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVRoge2ZQU7DMBBFLU6Awh3SBTvujNhU7Et3hQVCqjgFKqh0wwUei8ZSQU1iJ9+xCfPWSf681Bm5HucMwzAM448ALIBn4Au4A6oEGRVwDxyAB6BWZ/igBfDGT16BK2HGJfDyK+MDuFZl+KBzMlKpFhm9VCOzawnybMcsv2aZbXsydsBCIfTUEzRKKlDGs1EIfQaGRUtFygDs+555EZC7Ci3QOXfjnFuHSDXXrJt7QomppTW462Nto7NRpHhmNqnsMspCipFRFFSczIlUbGeiuX7IPfKtVZvUkLcdQ/pfZkKp6WUSSuWTSSCVX8YjkCpHxjNCSioTspf7f8xqyQlkypESyuSXSiCTTyqhzPRSzGlzypz+PigKKkZKWUh2qRQFZJUCbiODgz5mhjWXpUKopIPGg0LoMYXMQCnJQWNJh/WaWRFQk3ec8k6CGdE5qSkGXnqZk8AaWHFsFMsxy6wjo+LYWffABsVMyDAMwzAm4hvxgtw1EwuJEwAAAABJRU5ErkJggg==" alt =""/>
        <p id = "declaration">Drag the {token} Donut to the validator box to prove you are a Human</p>
        <div className="splitBoxes">
            <div ref={splitBox_unoRef} className="splitBox_uno">
                {imgData.map(elem => <div draggable = "true" key = {elem.key} className = "imgContainerDraggables" style = {{backgroundImage: `url(${elem.src})`}}><p>{elem.key}</p></div>)}
            </div>
            <div ref={splitBox_dousRef} className="splitBox_dous">
            <span ref={validatorRef} className="validator"></span>
            </div>
        </div>
        </div>,
        document.getElementById("__te_onlineBanking__popupPortal")
    );
};
export default CAPTCHA;
