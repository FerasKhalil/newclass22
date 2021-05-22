import React from 'react';
import { Button, Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component
{
    handleClose2 =() =>{
        this.props.handleClose();
    }
    render(){
        return(
            <div>
                <Modal show = {this.props.show} onHide={this.handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>
                    {this.props.description}
                </p>
                <img src={this.props.imgUrl} alt={this.props.title} width='465px'/>
                </Modal.Body>

                <Modal.Footer>
                    <p>Favorite:{this.props.counter}</p>
                    <Button variant="secondary" onClick={this.handleClose2}>Close</Button>
                </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
export default SelectedBeast;