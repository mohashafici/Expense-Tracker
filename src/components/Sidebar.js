import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full flex flex-col">
      <div className="flex items-center justify-center mt-10">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="rounded-full w-20 h-20"
        />
      </div>
      <div className="text-center mt-4">
        <p>camaar june</p>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/expenses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
              Expenses
            </Link>
          </li>
          <li>
            <Link to="/trips" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
              Trips
            </Link>
          </li>
          <li>
            <Link to="/approvals" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
              Approvals
            </Link>
          </li>
         
        </ul>
      </nav>
      <div className="mt-auto mb-10">
        <div className="text-center">
          <span className="text-green-400">Expensio</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
