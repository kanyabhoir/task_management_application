import React, { useState } from 'react';

function RegistrationPage({ handleRegister }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleRegister(firstName, lastName, email, password);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First name is required!';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required!';
    }
    if (!email.trim()) {
      errors.email = 'Email is required!';
    }
    if (!password.trim()) {
      errors.password = 'Password is required!';
    } else if (password !== confirmPassword) {
      errors.password = 'Passwords do not match!';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;