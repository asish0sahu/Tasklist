/* eslint-disable react/prop-types */

import { useState } from 'react';

const TaskAssignment = ({ onSelect }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleSelect = (e) => {
    const user = e.target.value; 
    setSelectedUser(user);
    onSelect(user); 
  };

  const usersOrTeams = [
    { value: 'user1', label: 'John Doe' },
    { value: 'team1', label: 'Development Team' },
    { value: 'team2', label: 'Nodejs Team' }
    
  ];

  return (
    <div className="mt-4">
      <label htmlFor="user-select" className="block text-sm font-medium text-gray-700">
        Assign to
      </label>
      <select
        id="user-select"
        value={selectedUser}
        onChange={handleSelect}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">None</option>
        {usersOrTeams.map((userOrTeam) => (
          <option key={userOrTeam.value} value={userOrTeam.value}>
            {userOrTeam.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskAssignment;