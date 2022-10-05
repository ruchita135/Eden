import * as React from 'react';
import '../App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Setup (props) {
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceUrl, setWorkspaceUrl] = useState("");
    const updateWorkspaceName = (e) => {
        console.log(e.target.value)
        setWorkspaceName(e.target.value);
    };
    
    const updateWorkspaceUrl = (e) => {
        setWorkspaceUrl(e.target.value);
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        let data = {
            workspaceName,
            workspaceUrl,
        };
        props.saveData({...props.userData, ...data})
        console.log(props.userData)
        props.nextPage(2)
        // return await makeRequest(data);
    };

    return (
      <div className='container'>
        <div className='text-center mb-5'>
            <p className='heading'>Let's set up a home for all your work</p>
            <p className='text-muted'>You can always create another workspace later</p>
        </div>
        <Form className='signup-form'>
            <Form.Group className="mb-3" controlId="workspaceName">
                <Form.Label>Workspace Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Eden"
                    value={workspaceName}
                    onChange={updateWorkspaceName}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="workspaceUrl">
                <Form.Label>Workspace URL <span className="text-muted">(optional)</span></Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className="text-muted">www.eden.com/ </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Example" 
                        aria-label="workspaceUrl"
                        aria-describedby="basic-addon1"
                        value={workspaceUrl}
                        onChange={updateWorkspaceUrl}
                    />
                </InputGroup>
                
            </Form.Group>

            <Button className='mt-3 w-100' variant="primary" type="submit" onClick={formSubmit}>
                Create Workspace
            </Button>
        </Form>
      </div>
    );
  }

  export default Setup;