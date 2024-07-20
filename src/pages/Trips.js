import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import NewTrip from '../components/NewTrip';

const Trips = () => {
  const [showNewTrip, setShowNewTrip] = useState(false);
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const querySnapshot = await getDocs(collection(db, 'trips'));
    const tripsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTrips(tripsData);
  };

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
    setShowNewTrip(false); // Close the form after submission
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Trips</h2>
      <button
        onClick={() => setShowNewTrip(!showNewTrip)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        {showNewTrip ? 'Close New Trip' : 'New Trip'}
      </button>
      {showNewTrip && <NewTrip onAddTrip={addTrip} />}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-gray-900 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">Name</th>
              <th className="px-4 py-2 border-b border-gray-700">Type</th>
              <th className="px-4 py-2 border-b border-gray-700">Purpose</th>
              <th className="px-4 py-2 border-b border-gray-700">Depart From</th>
              <th className="px-4 py-2 border-b border-gray-700">Destination</th>
              <th className="px-4 py-2 border-b border-gray-700">Dates</th>
              <th className="px-4 py-2 border-b border-gray-700">Budget</th>
              <th className="px-4 py-2 border-b border-gray-700">Accommodation</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b border-gray-700">{trip.name}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.type}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.purpose}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.departFrom}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.destination}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.dates}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.budget}</td>
                <td className="px-4 py-2 border-b border-gray-700">{trip.accommodation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trips;
