import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Home from './Home.js';

class ContentRouter extends Component{

    render()
    {
        return(
            <HashRouter>
                <div>
                <Route exact path="/" component = {Home}/>

                    <Route path="/hakkimda" component = {AboutMe}/>
   
                    <Route path="/iletisim" component = {Contact}/>

                </div>

            </HashRouter>
        );
    }
}

export default ContentRouter;