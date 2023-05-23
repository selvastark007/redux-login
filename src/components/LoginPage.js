import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, logout } from '../store/store';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoggedIn, username: loggedInUsername, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // Simulate login process
    if (username && password) {
      dispatch(loginSuccess(username));
    } else {
      dispatch(loginFailure('Please enter a username and password.'));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Login Form</h2>
      {error && <div>{error}</div>}
      {!isLoggedIn ? (
        <>
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
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <div>Welcome, {loggedInUsername}!</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
