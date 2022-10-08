import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Setup from './components/setup';
import Usage from './components/usage';
import Congrats from './components/congrats';
import SignupStepper from './components/signupStepper';

function App() {
  const [signupPage, setSignupPage] = useState(0);
  const [userData, setUserData] = useState({});
  return (
    <div className='App'>
      <Header />
      <SignupStepper step={signupPage} />
      {(() => {
        switch (signupPage) {
          case 0:
            return <Welcome nextPage={setSignupPage} saveData={setUserData} userData={userData} />
          case 1:
            return <Setup nextPage={setSignupPage} saveData={setUserData} userData={userData} />
          case 2:
            return <Usage nextPage={setSignupPage} saveData={setUserData} userData={userData} />
          case 3:
            return <Congrats nextPage={setSignupPage} userData={userData} />
          default:
            return <Welcome nextPage={setSignupPage} saveData={setUserData} userData={userData} />
        }
      })()}
    </div>
  );
}

export default App;
