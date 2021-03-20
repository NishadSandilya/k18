//This is the simple message displayinig modal content

//All imports here:
import './stylesheets/message.css';

//The Primary component here:
const Message = ({filename, close}) => {
    
    return(
        <div className="__te_onlineBanking__Message">
            <p>{filename}</p>
            <button onClick = {close}>Ok</button>
        </div>
    )
}

//Export component here:
export default Message;