import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AddClient from './AddClient/AddClient';
import ViewClient from './ViewClients/ViewClient';

function App() {
  return (
    <Router basename='/vka/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddClient />} />
        <Route path="/view" element={<ViewClient />} />
      </Routes>
    </Router>
  );
}

export default App;
