//This is the assembly component for the entire app. Dont mess with this if you aren't sure what you are doing.

//All imports here:
import './components/stylesheets/App.css';
import LandingPage from './components/LandingPage';
// import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';

//The primary App component here:
const App = () => {

    return(
        <div className = "__te_onlineBanking__App">  
            <Header/>
            <Switch>
                <Route path = '/' exact component = {LandingPage}/>
            </Switch>
            <Footer/>
        </div>
    )
}

//Export component here:
export default App;