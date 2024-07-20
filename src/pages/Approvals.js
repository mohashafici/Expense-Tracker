import React from 'react';

const approvalsData = [
  {
    id: 1,
    owner: 'Samson Zep',
    category: 'Travel',
    amount: '€700.00',
    frequency: 'Once',
  },
  {
    id: 2,
    owner: 'Jessica Bowers',
    category: 'Travel',
    amount: '€450.00',
    frequency: 'Once',
  },
  {
    id: 3,
    owner: 'John Wilson',
    category: 'Business',
    amount: '€645.00',
    frequency: 'Monthly',
  },
  {
    id: 4,
    owner: 'Hannah Gomez',
    category: 'Travel',
    amount: '€500.00',
    frequency: 'Monthly',
  },
  {
    id: 5,
    owner: 'Laura Polk',
    category: 'Supplies',
    amount: '€200.00',
    frequency: 'Bi-Monthly',
  },
  {
    id: 6,
    owner: 'Barbara Jones',
    category: 'Supplies',
    amount: '€275.25',
    frequency: 'Bi-Monthly',
  },
  {
    id: 7,
    owner: 'Zach Moss',
    category: 'Travel',
    amount: '€120.00',
    frequency: 'Monthly',
  },
];

const Approvals = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Approvals</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">Owner</th>
              <th className="px-4 py-2 border-b border-gray-700">Category</th>
              <th className="px-4 py-2 border-b border-gray-700">Amount</th>
              <th className="px-4 py-2 border-b border-gray-700">Frequency</th>
              <th className="px-4 py-2 border-b border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {approvalsData.map((approval) => (
              <tr key={approval.id}>
                <td className="px-4 py-2 border-b border-gray-700">{approval.owner}</td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <span className={`py-1 px-3 rounded-full text-sm ${approval.category === 'Travel' ? 'bg-blue-500' : 'bg-pink-500'}`}>
                    {approval.category}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-gray-700">{approval.amount}</td>
                <td className="px-4 py-2 border-b border-gray-700">{approval.frequency}</td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded-full">✓</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-full">✗</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvals;
