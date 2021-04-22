import React from 'react';
import { DataProvider } from './GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/header/Header';
import Pages from './Components/mainPages/Pages';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Pages />
      </Router>
    </DataProvider>
  );
}

export default App;
