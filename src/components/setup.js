import React, { useState } from 'react';
import '../App.css';
import '../css/form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Setup(props) {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');
  const [validated, setValidated] = useState(false);

  const updateWorkspaceName = (e) => {
    setWorkspaceName(e.target.value);
  };

  const updateWorkspaceUrl = (e) => {
    setWorkspaceUrl(e.target.value);
  };

  const formSubmit = async (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    let data = {
      workspaceName,
      workspaceUrl,
    };
    props.saveData({ ...props.userData, ...data })
    props.nextPage(2)
  };

  return (
    <div className='container  mb-3'>
      <div className='text-center mb-5'>
        <p className='heading'>Let's set up a home for all your work</p>
        <p className='text-muted'>You can always create another workspace later</p>
      </div>
      <Form validated={validated} className='signup-form' onSubmit={formSubmit}>
        <Form.Group className='mb-3' controlId='workspaceName'>
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            type='text'
            name='workspaceName'
            placeholder='Eden'
            value={workspaceName}
            onChange={updateWorkspaceName}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='workspaceUrl'>
          <Form.Label>Workspace URL <span className='text-muted'>(optional)</span></Form.Label>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1' className='text-muted'>www.eden.com/ </InputGroup.Text>
            <Form.Control
              // onInvalid={invalidMessage}
              type='text'
              name='workspaceUrl'
              placeholder='Example'
              aria-label='workspaceUrl'
              aria-describedby='basic-addon1'
              value={workspaceUrl}
              pattern='[A-Za-z0-9]+$'
              onChange={updateWorkspaceUrl}
              onInvalid={e => e.target.setCustomValidity('Please enter a valid URL path')}
              onInput={e => e.target.setCustomValidity('')}
            />
          </InputGroup>

        </Form.Group>

        <Button className='mt-3 w-100 btn-lg' variant='primary' type='submit'>
          Create Workspace
        </Button>
      </Form>
    </div>
  );
}

export default Setup;