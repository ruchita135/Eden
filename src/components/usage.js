import * as React from 'react';
import '../App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { RiUserFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";


function Usage (props) {
    const [usage, setUsage] = useState("myself");
    
    const updateUsage = (e) => {
        console.log(e.target.value)
        setUsage(e.target.value);
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        let data = {
            usage
        };
        props.saveData({...props.userData, ...data})
        console.log(props.userData)
        props.nextPage(3)
        // return await makeRequest(data);
    };

    return (
      <div className='container'>
        <div className='text-center mb-5'>
            <p className='heading'>How are you planning to use Eden?</p>
            <p className='text-muted'>We'll streamline your work experience accordingly.</p>
        </div>
        <Form className='signup-form'>
            <Form.Group className="d-md-flex justify-content-around mb-3" controlId="usage">
                <Form.Check 
                    type="radio"
                    id="myself"
                    label={
                        <Card style={{width: "12rem"}}>
                            <Card.Body className='p-4'>
                                <Card.Title className="mb-4"><RiUserFill size={25} /></Card.Title>
                                <Card.Title>For myself</Card.Title>
                                <Card.Text className='text-muted'>Write better. Think more clearly. Stay organized.</Card.Text>
                            </Card.Body>
                        </Card>
                    }
                    value="MYSELF"
                    onChange={updateUsage}
                />
                <Form.Check 
                    type="radio"
                    id="team"
                    label={
                        <Card style={{width: "12rem"}}>
                            <Card.Body className='p-4'>
                                <Card.Title className="mb-4"><RiTeamFill size={25} /></Card.Title>
                                <Card.Title>With my team</Card.Title>
                                <Card.Text className='text-muted'>Wikis, docs, tasks & projects, all in one place.</Card.Text>
                            </Card.Body>
                        </Card>
                    }
                    value="TEAM"
                    onChange={updateUsage}
                />
            </Form.Group>
            <Button className='mt-3 w-100' variant="primary" type="submit" onClick={formSubmit}>
                Create Workspace
            </Button>
        </Form>
      </div>
    );
  }

  export default Usage;