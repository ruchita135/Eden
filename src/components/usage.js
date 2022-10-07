import * as React from 'react';
import '../App.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { RiUserFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { IconContext } from "react-icons";


function Usage (props) {
    const [usage, setUsage] = useState("MYSELF");
    const [validated, setValidated] = useState(false);

    const updateUsage = (e) => {
        setUsage(e.target.value);
    };

    const formSubmit = async (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        let data = {
            usage
        };
        props.saveData({...props.userData, ...data})
        props.nextPage(3)
    };

    return (
      <div className='container'>
        <div className='text-center mb-5'>
            <p className='heading'>How are you planning to use Eden?</p>
            <p className='text-muted'>We'll streamline your work experience accordingly.</p>
        </div>
        <Form validated={validated} className='signup-form' onSubmit={formSubmit}>
            <Form.Group className="d-md-flex justify-content-around mb-3" controlId="usage">
                <Form.Check 
                    type="radio"
                    id="myself"
                    label={
                        <Card style={{width: "12rem"}}>
                            <Card.Body className='p-4'>
                                <Card.Title className="mb-4">
                                    <IconContext.Provider value={{ color: "#654ee0" }}>
                                        <RiUserFill size={25} />
                                    </IconContext.Provider>
                                </Card.Title>
                                <Card.Title>For myself</Card.Title>
                                <Card.Text className='text-muted'>Write better. Think more clearly. Stay organized.</Card.Text>
                            </Card.Body>
                        </Card>
                    }
                    value=""
                    name="usage"
                    onChange={updateUsage}
                    checked
                    required
                />
                <Form.Check 
                    type="radio"
                    id="team"
                    label={
                        <Card style={{width: "12rem"}}>
                            <Card.Body className='p-4'>
                                <Card.Title className="mb-4">
                                    <IconContext.Provider value={{ color: "#654ee0" }}>
                                        <RiTeamFill size={25} />
                                    </IconContext.Provider>
                                </Card.Title>
                                <Card.Title>With my team</Card.Title>
                                <Card.Text className='text-muted'>Wikis, docs, tasks & projects, all in one place.</Card.Text>
                            </Card.Body>
                        </Card>
                    }
                    value="TEAM"
                    name="usage"
                    onChange={updateUsage}
                    required
                />
            </Form.Group>
            <Button className='mt-3 w-100 btn-lg' variant="primary" type="submit">
                Create Workspace
            </Button>
        </Form>
      </div>
    );
}

export default Usage;