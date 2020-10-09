import React, { useState } from 'react';
import './App.css';

import EmployeesList from './components/EmployeesList';

const App = () => {

  const employeeList = [
    {
      name: "Parker Green",
    },
    {
      name: "Jordan Richards",
    },
    {
      name: "Alex Stevens",
    },
    {
      name: "Avery Scott",
    },
    {
      name: "Riley Miller",
    },
    {
      name: "Charlie Green",
    }
  ];
  const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchInput) => {
      const filteredEmployees = employeeList.filter(employee => employee.name.includes(searchInput));
      return setSearchResults([...filteredEmployees]);
    }
    return (
      <div className="App">
        <EmployeesList 
        handleSearch={handleSearch}
        employees={searchResults} 
        />
      </div>
    );
}

export default App;
