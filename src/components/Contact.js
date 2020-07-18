import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return (

            <div className = "social-links">
                    <div className="content-page">
                        <h1>Bana nasıl ulaşabilirsiniz?</h1>
                            <p>
                                Bana aşağıdaki ikon'a tıklayarak mail yolu ile ulaşabilirsiniz.
                                </p>                         
                    </div> 
                    <a href="mailto:yilmazmertcannn@gmail.com@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-paper-plane" >    </i>
                    </a> 
            </div>
        );
    }
}

export default Contact;