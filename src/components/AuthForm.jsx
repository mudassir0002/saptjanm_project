import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({
  isLogin,
  formData,
  onSubmit,
  onInputChange,
  onToggleAuthMode
}) => {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">
        {isLogin ? 'Welcome Back!' : 'Create Account'}
      </h2>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 border rounded-lg"
            name="email"
            value={formData.email}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            className="w-full p-3 border rounded-lg"
            name="password"
            value={formData.password}
            onChange={onInputChange}
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full p-3 border rounded-lg"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onInputChange}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">or continue with</p>
        <button
          className="w-full bg-white border border-gray-300 p-3 rounded-lg mt-4 flex items-center justify-center hover:bg-gray-50"
          onClick={() => {/* Google OAuth implementation */ }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="w-6 h-6 mr-2"
          />
          Google
        </button>
      </div>

      <p className="mt-8 text-center">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={onToggleAuthMode}
          className="text-pink-600 font-semibold hover:text-pink-700"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>

      {/* Back to Home Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-full shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
        >
          ⬅ Back to Home
        </Link>
      </div>

    </div>
  );
};

export default AuthForm;
