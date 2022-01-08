import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppID from 'ibmcloud-appid-js';

function App() {
  const appID = React.useMemo(() => {
    return new AppID()
  }, []);
  const [errorState, setErrorState] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  (async () => {
    try {
      await appID.init({
        clientId: 'f381b315-eb61-43e1-b090-bafffeba06d9',
        discoveryEndpoint: 'https://eu-gb.appid.cloud.ibm.com/oauth/v4/198f2cab-9fec-402e-86a5-94156d454dcb/.well-known/openid-configuration'
      });
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  })();
  const [welcomeDisplayState, setWelcomeDisplayState] = React.useState(false);
  const [loginButtonDisplayState, setLoginButtonDisplayState] = React.useState(true);
  const [userName, setUserName] = React.useState('');
  const loginAction = async () => {
    try {
      const tokens = await appID.signin();
      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);
      setUserName(tokens.idTokenPayload.name);
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  };
  return (
    <div className='App'>
    <header className='App-header'>
      <img src="https://raw.githubusercontent.com/dotnsf/react-appid/main/src/logo.svg" className='App-logo' alt='logo' />
        {welcomeDisplayState && <div> Welcome {userName}! You are now authenticated.</div>}
        {loginButtonDisplayState && <button style={{fontSize: '24px', backgroundColor: 'skyblue', 
          border: 'none', cursor: 'pointer'}} id='login' onClick={loginAction}>Login</button>}
        {errorState && <div style={{color: 'red'}}>{errorMessage}</div>}
    </header>
    </div>
  );
}
export default App;
