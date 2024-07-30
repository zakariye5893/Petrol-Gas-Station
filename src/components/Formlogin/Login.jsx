import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../styles/login.css';
import Swal from 'sweetalert2';
import CommonSection from "../UI/CommonSection";

function Form() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    
  
    event.preventDefault();

    // Check if the entered username and password match the authentication credentials
    
    if (username === 'Zaki' && password === '1234') {
      // Successful login, navigate to the new page
      navigate('/MainDashboard');
    } else {
      // Invalid credentials, display an error message
      // setErrorMessage('Invalid username or password');
      Swal.fire({
  icon: 'error',
  title: 'Sorry...',
  text: 'Inviled username or password',
  timer: 3000,
});
    }
  };

  return (
    <div>
      <CommonSection title="Login-Page" />
    
    <div className="login-page">
     
      <div className="form">
        <form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className="message">Already registered? <a href="#">Sign In</a></p>
        </form>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>
    </div>
    </div>
  );
}

export default Form;
