//import logo from './logo.svg';
//import './App.css';
import React, { PureComponent } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import jsonData from './components/hornedJess.json'; 


 class App extends PureComponent
{   constructor(props)
    {//the second one is the one imported
        super(props);
        this.state={
            data: jsonData
        }
    }
    render()
    {
        return (
          <div>
            <Header></Header>
            <Main passingData={this.state.data}></Main>
            <Footer></Footer>
            </div>
        )
    }
}

export default App;

