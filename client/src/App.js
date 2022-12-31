import SearchComponent from './components/SearchComponent';
import TableComponent from './components/TableComponent'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <SearchComponent/>
      <TableComponent />
    </div>
  );
}

export default App;
