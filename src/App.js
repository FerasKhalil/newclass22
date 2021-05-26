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
            jsonData: jsonData,
            element:{},
            show:false,

        }
    }

    showStuff = (vary) =>{
        let newElement = jsonData.find(function(element){

            if(element.title===vary)
            return element;
        })
        this.setState({
            element:newElement,
            show:true,

        })


    }


    render()
    {
        return (
          <div>
            <Header ></Header>
            show={this.state.show}
            element={this.state.element}
            hideStuff={this.hidestuff}
            <Main passingData={this.state.jsonData} beastInfo={this.state.dataArr}
            showStuffFromApp={this.showStuff}
            ></Main>
            <Footer></Footer>
            </div>
        )
    }
}

export default App;

