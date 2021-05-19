import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends PureComponent {
    constructor(props)
    {
        super(props)
        this.state = {
            counter : 0
        }
    }

    favoriteImg = () => {
        this.setState(
            {
                counter : this.state.counter +1
            }
        )
    }
    
    render() {
        return (
            <div className="beasts">

                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img onClick={this.favoriteImg} variant="top" src={this.props.image_url} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Favorite💓:{this.state.counter}
                        </Card.Text>

                        
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeasts;
