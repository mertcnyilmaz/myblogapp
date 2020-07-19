import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { HashRouter} from 'react-router-dom';
import ContentRouter from './components/ContentRouter.js';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { HashLink } from 'react-router-hash-link';


class App extends Component {
  render()
  {
    return (
      <div className="demo-big-content">
        <Layout fixedHeader className="background-layout">

          <Header transparent style={{WebkitBoxShadow:'0 8px 6px -6px black', MozBoxShadow:'0 8px 6px -6px black', boxShadow:'0 8px 6px -6px black'}} title={<HashRouter><HashLink to="/" style={{color:'#454545', opacity:.8}} >Mertcan Yılmaz</HashLink></HashRouter>}  scroll>
            <HashRouter>
            <Navigation>
                  <HashLink style={{color:'#454545', fontSize:'16px'}} to="/hakkimda">Hakkımda</HashLink>
                  <HashLink style={{color:'#454545', fontSize:'16px'}} to="/iletisim">İletişim</HashLink>
              </Navigation>
            </HashRouter>

 
            </Header>
            <Drawer fixedHeader className= "mdl-layout-title"  title={<HashRouter><HashLink style={{textDecoration: 'none', color: '#454545'}} to="/">Mertcan Yılmaz</HashLink></HashRouter>}>
            <HashRouter>
            <Navigation>
                  <HashLink style={{color:'#454545', fontSize:'16px'}} to="/hakkimda">Hakkımda</HashLink>
                  <HashLink style={{color:'#454545', fontSize:'16px'}} to="/iletisim">İletişim</HashLink>
              </Navigation>
            </HashRouter>
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
