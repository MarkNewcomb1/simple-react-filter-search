import React from 'react';

const EmployeesList = ({handleSearch, employees}) => {
    return (
      <div>
        <div className="controls">
          <input type="text" className="filter-input" onChange={(e) => handleSearch(e.target.value)} data-testid="filter-input" />
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
        </div>
    );
}

export default EmployeesList;
