import * as React from 'react';
import '../App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Welcome (props) {
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [validated, setValidated] = useState(false);
    const updateFullName = (e) => {
        console.log(e.target.value)
        setFullName(e.target.value);
    };
    
    const updateDisplayName = (e) => {
        setDisplayName(e.target.value);
    };

    const formSubmit = (e) => {
        const form = e.currentTarget;
        if ( form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        let data = {
            fullName,
            displayName,
        };
        props.saveData({...props.userData, ...data})
        props.nextPage(1)
    };


    
    return (
      <div className='container'>
        <div className='text-center mb-5'>
            <p className='heading'>Welcome! First things first...</p>
            <p className='text-muted'>You can always change them later.</p>
        </div>
        <Form validated={validated} className='signup-form' onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Steve Jobs"
                    value={fullName}
                    onChange={updateFullName}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="displayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Steve" 
                    value={displayName}
                    onChange={updateDisplayName}
                    required
                />
            </Form.Group>

            <Button className='button mt-3 w-100' variant="primary" type="submit" >
                Create Workspace
            </Button>
        </Form>

      </div>
    );
  }

  export default Welcome;