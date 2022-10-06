import logo from './logo.jpg';
import './App.css';
import React, { useState } from 'react'
import Welcome from './components/welcome';
import Setup from './components/setup';
import Usage from './components/usage';
import Congrats from './components/congrats';
import SignupStepper from './components/signupStepper';

function App() {
  const [signupPage, setSignupPage] = useState(0);
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <header className="App-header my-5">
        <img className='px-2' alt="app-logo" src={logo}/>
        <div className='App-name font-weight-bold'>Eden</div>
      </header>
      <div className="mb-5 w-60 m-auto">
        <SignupStepper step={signupPage}/>
      </div>
      
      {(() => {
        switch (signupPage) {
          case 0:
            return <Welcome nextPage={setSignupPage} saveData={setUserData} userData={userData}/>
          case 1:
            return <Setup nextPage={setSignupPage} saveData={setUserData} userData={userData} />
          case 2:
            return <Usage nextPage={setSignupPage} saveData={setUserData} userData={userData} />
          case 3:
            return <Congrats nextPage={setSignupPage} userData={userData}/>
          default:
            return <Welcome />
        }
      })()}
      
    </div>
  );
}

export default App;
