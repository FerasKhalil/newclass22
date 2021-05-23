import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import SelectedBeast from './selectedBeast';

class HornedBeasts extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state = {
            counter : 0,
            show:false,
            imgUrl:'',
            title:'',
            description:''
        }
    }
    
    favoriteImg = () => {
        this.setState(
            {
                counter : this.state.counter +1
            }
        )
        
    }
     
   handleShow=() =>{
       this.setState({
           show:true,
           imgUrl:this.props.imgUrl,
           title:this.props.title,
           description:this.props.description
       })
   }
handleClose=()=>{
    this.setState({
        show:false
    })
}

    render() {
        return (
            <div >

                <Card style={{ width: '18rem' }}>
                
                        <Card.Img onClick={this.handleShow} variant="top" src={this.props.imgUrl} alt={this.props.title} />
                    <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        {/* <Card.Text>
                        Favorite💓:{this.state.counter}
                        </Card.Text> */}
                        <Button variant="primary" onClick={this.favoriteImg}>Favorite💓:{this.state.counter}</Button>

                        
                    </Card.Body>
                </Card>
                
                <SelectedBeast
                show = {this.state.show}
                handleClose={this.handleClose}
                likesCounter={this.state.counter}
                imgUrl={this.state.imgUrl}
                title={this.state.title}
                description={this.state.description}
                />
                

            </div>
        )//we pass to selected beast which is hornedbeast child
    }
}

export default HornedBeasts;
