import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerSuccess, registerFailure } from '../store/store';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    // Simulate registration process
    if (username && password) {
      dispatch(registerSuccess(username));
    } else {
      dispatch(registerFailure('Please enter a username and password.'));
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div>{error}</div>}
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
      {isLoggedIn && <div>Welcome, {username}!</div>}
    </div>
  );
};

export default RegistrationForm;
