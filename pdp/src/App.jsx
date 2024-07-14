import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import './index.scss';

import Footer from 'home/Footer';
import Header from 'home/Header';

import PDPContent from './PDPContent';

function DebugLocation() {
  const location = useLocation();
  console.log(location);
  return null;
}

const App = () => (
  <Router>
    <DebugLocation />
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
