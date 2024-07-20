// src/components/NewTrip.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const NewTrip = ({ onAddTrip }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    purpose: '',
    departFrom: '',
    destination: '',
    dates: '',
    budget: '',
    accommodation: ''
  });

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
      await addDoc(collection(db, 'trips'), formData);
      onAddTrip(formData);
      setFormData({
        name: '',
        type: '',
        purpose: '',
        departFrom: '',
        destination: '',
        dates: '',
        budget: '',
        accommodation: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">New Trip</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Purpose</label>
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Depart From</label>
          <input
            type="text"
            name="departFrom"
            value={formData.departFrom}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Dates</label>
          <input
            type="text"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Accommodation</label>
          <input
            type="text"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-700"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-green-500 rounded-lg">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewTrip;
