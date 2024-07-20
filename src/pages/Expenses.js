import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import NewExpense from './NewExpense';
import EditExpense from './EditExpense';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and delete icons

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [showEditExpense, setShowEditExpense] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const fetchExpenses = async () => {
    const querySnapshot = await getDocs(collection(db, 'expenses'));
    const expensesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setExpenses(expensesData);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'expenses', id));
    fetchExpenses();
  };

  const handleEdit = (expense) => {
    setCurrentExpense(expense);
    setShowEditExpense(true);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Expenses</h2>
      <button
        onClick={() => setShowNewExpense(!showNewExpense)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        {showNewExpense ? 'Close New Expense' : 'New Expense'}
      </button>
      {showNewExpense && <NewExpense fetchExpenses={fetchExpenses} />}
      {showEditExpense && (
        <EditExpense
          expense={currentExpense}
          fetchExpenses={fetchExpenses}
          closeEdit={() => setShowEditExpense(false)}
        />
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">Details</th>
              <th className="px-4 py-2 border-b border-gray-700">Merchant</th>
              <th className="px-4 py-2 border-b border-gray-700">Amount</th>
              <th className="px-4 py-2 border-b border-gray-700">Report</th>
              <th className="px-4 py-2 border-b border-gray-700">Status</th>
              <th className="px-4 py-2 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="px-4 py-2 border-b border-gray-700">{expense.details}</td>
                <td className="px-4 py-2 border-b border-gray-700">{expense.merchant}</td>
                <td className="px-4 py-2 border-b border-gray-700">{expense.amount}</td>
                <td className="px-4 py-2 border-b border-gray-700">{expense.report}</td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <span className="bg-pink-500 text-white py-1 px-3 rounded-full text-sm">
                    {expense.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <FaEdit className="cursor-pointer text-yellow-500" onClick={() => handleEdit(expense)} />
                    <FaTrash className="cursor-pointer text-red-500" onClick={() => handleDelete(expense.id)} />
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

export default Expenses;
