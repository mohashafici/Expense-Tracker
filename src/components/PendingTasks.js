import React from 'react';

const PendingTasks = () => {
  const tasks = [
    { name: 'Pending Approvals', count: 5 },
    { name: 'New Trips Registered', count: 1 },
    { name: 'Unreported Expenses', count: 4 },
    { name: 'Upcoming Expenses', count: 0 },
    { name: 'Unreported Advances', count: '€0.00' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full lg:w-1/2">
      <h3 className="text-xl font-bold mb-4">Pending Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span>{task.name}</span>
            <span>{task.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasks;
