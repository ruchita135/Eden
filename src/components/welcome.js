import * as React from 'react';
import '../App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Welcome (props) {
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const updateFullName = (e) => {
        console.log(e.target.value)
        setFullName(e.target.value);
    };
    
    const updateDisplayName = (e) => {
        setDisplayName(e.target.value);
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        let data = {
            fullName,
            displayName,
        };
        props.saveData({...props.userData, ...data})
        props.nextPage(1)
        console.log(props.userData)
        // return await makeRequest(data);
    };


    
    return (
      <div className='container'>
        <div className='text-center mb-5'>
            <p className='heading'>Welcome! First things first...</p>
            <p className='text-muted'>You can always change them later.</p>
        </div>
        <Form className='signup-form'>
            <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Steve Jobs"
                    value={fullName}
                    onChange={updateFullName}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="displayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Steve" 
                    value={displayName}
                    onChange={updateDisplayName}
                />
            </Form.Group>

            <Button className='mt-3 w-100' variant="primary" type="submit" onClick={formSubmit}>
                Create Workspace
            </Button>
        </Form>

      </div>
    );
  }

  export default Welcome;