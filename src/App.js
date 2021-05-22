//import logo from './logo.svg';
//import './App.css';
import React, { PureComponent } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import data from './components/hornedJess.json'; 


 class App extends PureComponent
{   constructor(props)
    {
        super(props);
        this.state={
            data: data
        }
    }
    render()
    {
        return (
          <div>
            <Header></Header>
            <Main data={this.state.data}></Main>
            <Footer></Footer>
            </div>
        )
    }
}

export default App;
