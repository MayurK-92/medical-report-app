import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formState.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formState.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
