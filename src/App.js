// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RegistrationForm from './components/RegisterForm';
import LoginForm from './components/LoginPage';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RegistrationForm />
        {/* <LoginForm /> */}
      </div>
    </Provider>
  );
};

export default App;
