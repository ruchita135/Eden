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
		<Box style={{ width: '60%' }} className="mb-5 m-auto" size={50}>
			<Stepper size={70} activeStep={props.step} alternativeLabel>
				{steps.map((label, index) => (
					// console.log(props.step, index),
					<Step
						// completed={false}
						size={70}
						key={label}
						className={index === props.step ? 'active-step' : ''}
						sx={{
							'& .MuiStepLabel-root .Mui-completed': {
								color: '#654ee0',
								border: "none",
							},
							'& .MuiStepLabel-root .Mui-active': {
								color: '#654ee0',
								border: "none",
							},
							'& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
							{
								color: 'common.white',
							},
							'& .MuiStepLabel-root .MuiStepIcon-text': {
								fill: 'grey',
							},
							'& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
								fill: 'white',
							},
							'& .MuiSvgIcon-root': {
								color: 'white',
								borderRadius: "50%",
								border: "1px solid #f1f1f5",
								transform: 'scale(1.5)',
							},
						}}
					>
						<StepLabel>{ }</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}

export default SignupStepper;