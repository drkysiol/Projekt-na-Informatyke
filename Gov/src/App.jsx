import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <LoginForm/>
      </div>
    </>
  );
}

export default App;