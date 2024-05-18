import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Zarejestuj się</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <Link to="/">masz juz konto? Zaloguj się</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;