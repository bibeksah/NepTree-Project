import React, { createContext, useState } from 'react';
import { register, login } from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
  });

  const handleRegister = async (username, password, email) => {
    try {
      await register(username, password, email);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);
      setAuthState({
        isAuthenticated: true,
        token: data.access,
      });
      localStorage.setItem('token', data.access);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authState, handleRegister, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
