import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import GetStarted from './pages/GetStarted';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex-1">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<GetStarted />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
