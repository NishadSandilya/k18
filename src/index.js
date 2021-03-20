//This is the final component to render the entire app to the DOM

//All imports here:
import App from './App';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router basename = "/"><App/></Router>, document.getElementById('__te_onlineBanking'));