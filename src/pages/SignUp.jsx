import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !agreed) {
      toast.error('Please fill out all fields and agree to the privacy policy.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registered successfully!');
      navigate('/signin');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <ToastContainer />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>
        <p className="text-lg mb-6 text-gray-300">Hello! Let's join with us</p>
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
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-2 rounded bg-gray-700 text-white"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center text-gray-300">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2">I agree with the privacy policy</span>
            </label>
          </div>
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-green-500 text-white py-2 px-4 rounded-full w-full mb-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-300">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/signin')}
            className="text-green-500 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
