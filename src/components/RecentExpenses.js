import React from 'react';

const RecentExpenses = () => {
  const expenses = [
    { subject: 'Office Supplies', employee: 'John Smith', team: 'Marketing', amount: '€150.00' },
    { subject: 'Business Lunch', employee: 'Sarah Jade', team: 'Sales', amount: '€75.50' },
    { subject: 'Travel Expenses', employee: 'Mike Brown', team: 'Operations', amount: '€450.25' },
    { subject: 'Client Dinner', employee: 'Jennifer Lee', team: 'Marketing', amount: '€120.00' },
    { subject: 'Hotel', employee: 'David Wilson', team: 'Finance', amount: '€275.75' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full lg:w-1/2">
      <h3 className="text-xl font-bold mb-4">Recent Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span>{expense.subject}</span>
            <span>{expense.employee}</span>
            <span>{expense.team}</span>
            <span>{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentExpenses;
