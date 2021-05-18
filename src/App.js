import logo from './logo.svg';
//import './App.css';
import React, { PureComponent } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';


 class App extends PureComponent
{
    render()
    {
        return (
          <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            </div>
        )
    }
}

export default App;
