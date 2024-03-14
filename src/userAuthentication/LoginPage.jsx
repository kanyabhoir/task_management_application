import React, { useState } from 'react';

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (validateForm()) {
      const userData = {
        username,
        password,
      };
      console.log('Submitted data:', userData);
      handleLogin(userData);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required!';
    }
    if (!password.trim()) {
      errors.password = 'Password is required!';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;