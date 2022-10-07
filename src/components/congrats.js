import * as React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HiCheckCircle } from "react-icons/hi";
import { IconContext } from "react-icons";

function Congrats (props) {
  const formSubmit = async (e) => {
    e.preventDefault()
    props.nextPage(4)
  };

  return (
    <div className='container  mb-3'>
      <div className='p-4 text-center'>
        <IconContext.Provider value={{ color: "#654ee0" }}>
          <HiCheckCircle size={90} />
        </IconContext.Provider>
      </div>
      <div className='text-center mb-5'>
        <p className='heading'>Congratulations, {props.userData.fullName}!</p>
        <p className='text-muted'>You have completed onboarding, you can start using the Eden!</p>
      </div>

      <Form className='signup-form' onSubmit={formSubmit}>
        <Button className='mt-3 w-100 btn-lg' variant="primary" type="submit">
          Launch Eden
        </Button>
      </Form>
      

    </div>
  );
}

export default Congrats;