import  { useState } from 'react';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      {isLoggedIn ? <LogoutComponent /> : <LoginComponent />}
    </div>
  );
}

function LoginComponent() {
    return (
    <>
    <p>Login Component</p>
    <label htmlFor="username">username</label>
    <input type="text" placeholder='enter username'/>
    <label htmlFor="password">paswword</label>
    <input type="password" placeholder='enter passwrod'/>
    </>
    )
  }
  
  function LogoutComponent() {
    return (
        <>
    <p>Logout Component</p>
    <label htmlFor="firstname">first name</label>
    <label htmlFor="username">username</label>
    <input type="text" placeholder='enter username'/>
    <label htmlFor="password">paswword</label>
    <input type="password" placeholder='enter passwrod'/>
    </>
    );
  }

  export default Dashboard;
