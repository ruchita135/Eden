import * as React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HiCheckCircle } from "react-icons/hi";


function Congrats (props) {
    console.log(props.userData)
    return (
      <div>
        <div className='p-4 text-center'>
          <HiCheckCircle size={90} />
        </div>
        <div className='text-center mb-5'>
          <p className='heading'>Congratulations,{props.userData.fullName}!</p>
          <p className='text-muted'>You have completed onboarding, you can start using the Eden!</p>
        </div>

        <Form className='signup-form'>
          <Button className='mt-3 w-100' variant="primary" type="submit">
            Launch Eden
          </Button>
        </Form>
        
  
      </div>
    );
  }

  export default Congrats;