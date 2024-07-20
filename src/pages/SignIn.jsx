import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error('Please fill out all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Welcome ${email}!`);
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <ToastContainer />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome Back</h1>
        <p className="text-lg mb-6 text-gray-300">Hey! Good to see you again</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded bg-gray-700 text-white"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded bg-gray-700 text-white"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <span className="text-green-500 cursor-pointer">Forgot password?</span>
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="bg-green-500 text-white py-2 px-4 rounded-full w-full mb-4"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-300">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-green-500 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
