import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link, BrowserRouter} from 'react-router-dom';
import ContentRouter from './components/ContentRouter.js';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


class App extends Component {
  render()
  {
    return (
      <div className="demo-big-content">
        <Layout fixedHeader className="background-layout">

          <Header transparent style={{WebkitBoxShadow:'0 8px 6px -6px black', MozBoxShadow:'0 8px 6px -6px black', boxShadow:'0 8px 6px -6px black'}} title={<a href="/" style={{color:'#454545', opacity:.8}} >Mertcan Yılmaz</a> }  scroll>
              <Navigation>
                  <a style={{color:'#454545', fontSize:'16px'}} href="/hakkimda">Hakkımda</a>
                  <a style={{color:'#454545', fontSize:'16px'}} href="/iletisim">İletişim</a>
              </Navigation>
 
            </Header>
            <Drawer fixedHeader className= "mdl-layout-title"  title={<BrowserRouter><Link style={{textDecoration: 'none', color: '#454545'}} to="/">Mertcan Yılmaz</Link></BrowserRouter>}>
                <Navigation>
                  <a href="/hakkimda">Hakkımda</a>
                  <a href="/iletisim">İletişim</a>
                </Navigation>
              </Drawer>
        <Content>           
            <ContentRouter/>
        </Content>

        <div className="footer-copyright text-center py-3" style={{ color:'#454545'}}>
          <small>&copy; Copyright 2020</small>
        </div>
        </Layout>
      </div>
    );
  }

}

export default App;
