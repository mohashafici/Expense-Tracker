import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const NewExpense = ({ fetchExpenses }) => {
  const [formData, setFormData] = useState({
    details: '',
    merchant: '',
    amount: '',
    report: '',
    status: 'Submitted',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.details) newErrors.details = 'Details are required';
    if (!formData.merchant) newErrors.merchant = 'Merchant is required';
    if (!formData.amount || formData.amount <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!formData.report) newErrors.report = 'Report is required';
    if (!formData.date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await addDoc(collection(db, 'expenses'), formData);
      fetchExpenses();
      setFormData({
        details: '',
        merchant: '',
        amount: '',
        report: '',
        status: 'Submitted',
        date: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrors({ submit: 'Failed to add expense. Please try again.' });
    }
  };

  return (
    <div className="p-4 space-y-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">New Expense</h2>
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
          {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
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
          {errors.merchant && <p className="text-red-500 text-sm mt-1">{errors.merchant}</p>}
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
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
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
          {errors.report && <p className="text-red-500 text-sm mt-1">{errors.report}</p>}
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
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        {errors.submit && <p className="text-red-500 text-sm mt-1">{errors.submit}</p>}
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-green-500 rounded-lg">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
