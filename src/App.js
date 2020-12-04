import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import { Header } from 'components/common';
import AppRoutes from 'AppRoutes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main center-holder">
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;