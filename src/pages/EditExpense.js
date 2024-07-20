import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const EditExpense = ({ expense, fetchExpenses, closeEdit }) => {
  const [formData, setFormData] = useState({ ...expense });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'expenses', formData.id), formData);
      fetchExpenses();
      closeEdit();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Edit Expense</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-1">Details</label>
          <input
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Merchant</label>
          <input
            type="text"
            name="merchant"
            value={formData.merchant}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Report</label>
          <input
            type="text"
            name="report"
            value={formData.report}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-green-500 rounded-lg">Save</button>
          <button type="button" onClick={closeEdit} className="ml-2 px-4 py-2 bg-red-500 rounded-lg">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditExpense;
