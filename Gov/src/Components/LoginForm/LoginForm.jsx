import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Zaloguj się</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Zaloguj się</button>
          <Link to="/SignUp">Załóż konto</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;