import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form'; 

class FormInfo extends PureComponent 
{
    updateForm = (event) =>{
        let value = event.target.value;
        this.props.updateMain(value);
    }
    render()
    {
        return(
            <div>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Custom Select</Form.Label>
                <Form.Control as="select" custom onChange={this.updateForm}>
                <option value='all'>ALL</option>
                <option value='1'>1 horn</option>
                <option value='2'>2 horns</option>
                <option value='3'>3 horns</option>
                <option value='100'>100 horns</option>


                </Form.Control>

                </Form.Group>
            </Form>
            </div>
        )
    }

}

export default FormInfo;