//This is the header for the app

//All imports here:
import './stylesheets/header.css';
import {Link} from 'react-router-dom';

//The primary Header component here:
const Header = () => {
    return(
        <div className="__te_onlineBanking__Header">
            <Link to = '/'><p>Test App</p></Link>
            <p>Below is an interface to demonstrate the use of graphical captchas, intuitive for humans, a far-cry for machines</p>
        </div>
    )
}

//Export component here:
export default Header;