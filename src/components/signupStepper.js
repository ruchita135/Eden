import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'welcome',
  'signup',
  'usage',
  'congratulations'
];

function SignupStepper(props) {
	return (
		<Box style={{ width: '80%' }} className="m-auto" size={50}>
	        <Stepper size={70} activeStep={props.step} alternativeLabel>
	          {steps.map((label) => (
	            <Step key={label}>
	              <StepLabel>{}</StepLabel>
	            </Step>
	          ))}
	        </Stepper>
	    </Box>
	);
}

export default SignupStepper;