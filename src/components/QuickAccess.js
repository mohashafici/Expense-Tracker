import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickAccess = () => {
  const navigate = useNavigate();

  const actions = [
    { name: 'New expense', color: 'bg-pink-500', icon: '+', path: '/expenses' },
    { name: 'Add receipt', color: 'bg-blue-500', icon: '+' },
    { name: 'Create report', color: 'bg-gray-500', icon: '+' },
    { name: 'Create trip', color: 'bg-red-500', icon: '+', path: '/trips' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-around">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${action.color} text-white py-2 px-4 rounded-lg shadow-md`}
          onClick={() => action.path && navigate(action.path)}
        >
          <span className="mr-2">{action.icon}</span>
          {action.name}
        </button>
      ))}
    </div>
  );
};

export default QuickAccess;
