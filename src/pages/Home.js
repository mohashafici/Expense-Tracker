import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900" style={{ backgroundImage: 'url("/path/to/your/image.jpg")', backgroundSize: 'cover' }}>
      <div className="bg-gray-800 bg-opacity-75 p-12 rounded-lg text-center shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Expense Tracker</h1>
        <p className="text-lg mb-6 text-gray-300">Track your expenses efficiently and effortlessly</p>
        <Link to="/expenses" className="bg-green-500 text-white py-3 px-4 rounded-full">Go to Expenses</Link>
      </div>
    </div>
  );
};

export default Home;
