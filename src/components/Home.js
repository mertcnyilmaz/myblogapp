import React, { Component } from 'react';

class Home extends Component {

    render(){
        return(
            <div>                                      
                    <img src = "pp.png"
                        alt = "avatar"
                        className = "avatar-img"/>
                        <div className="banner-text">
                            <h1>Software Developer</h1>                         
                            <p>C# | .NET | C / C++ | JavaScript | HTML / CSS / Bootstrap | SQL | Oracle | MongoDB</p>
                        </div>  
                        <div className = "social-links">
                        <a href = "https://www.linkedin.com/in/mertcan-yilmaz/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" >    </i>
                        </a> 

                        <a href = "https://github.com/mertcnyilmaz" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" >    </i>
                        </a> 

                        <a href = "https://medium.com/@mertcnyilmaz" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium" >    </i>
                        </a> 
                        </div>
         
                </div>
        );
    }
}

export default Home;