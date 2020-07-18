import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Home from './Home.js';

class ContentRouter extends Component{

    render()
    {
        return(
            <BrowserRouter>
                <div>
                <Route exact path="/" component = {Home}/>

                    <Route path="/hakkimda" component = {AboutMe}/>
   
                    <Route path="/iletisim" component = {Contact}/>

                </div>

            </BrowserRouter>
        );
    }
}

export default ContentRouter;