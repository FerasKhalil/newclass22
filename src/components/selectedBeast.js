import React from 'react';
import { Button, Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component {
    handleClose2 = () => {
        this.props.handleClose();

    }

//onhide is for the x button close button
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            {this.props.description}
                        </p>
                        <img src={this.props.imgUrl} alt={this.props.title} width='465px' />
                    </Modal.Body>

                    <Modal.Footer>
                        <p>Favorite:{this.props.likesCounter}</p>
                        <Button variant="secondary" onClick={this.handleClose2}>Close</Button>
                    </Modal.Footer>
                </Modal>

                {/* <odal show='true'>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" >
        Close
      </Button>
      <Button variant="primary">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>M */}
            </div>
        )
    }
}
export default SelectedBeast;


