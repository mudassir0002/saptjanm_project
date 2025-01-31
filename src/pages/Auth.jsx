import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <AuthForm 
        isLogin={isLogin}
        formData={formData}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onToggleAuthMode={() => setIsLogin(!isLogin)}
      />
    </div>
  );
};

export default Auth;