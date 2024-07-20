import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900"> {/* Updated background color */}
      <div className="bg-gray-800 p-12 rounded-lg text-center shadow-lg max-w-md w-full"> {/* Updated background color */}
        <h1 className="text-3xl font-bold mb-4 text-white">Get Started</h1> {/* Updated text color */}
        <p className="text-lg mb-6 text-gray-300">Start with sign up or sign in</p> {/* Updated text color */}
        <button onClick={handleSignUp} className="bg-green-500 text-white py-3 px-4 rounded-full mb-4 w-full">Sign Up</button> {/* Updated button color */}
        <button onClick={handleSignIn} className="bg-green-500 text-white py-3 px-4 rounded-full w-full">Sign In</button> {/* Updated button color */}
      </div>
    </div>
  );
};

export default GetStarted;
