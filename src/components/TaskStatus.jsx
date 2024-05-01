/* eslint-disable react/prop-types */
import  { useState } from 'react';

const TaskStatus = () => {
 const [status, setStatus] = useState('Not Started');

 const updateStatus = (newStatus) => {
   
    if (status !== newStatus) {
        setStatus(newStatus);
        console.log(`Task status updated to: ${newStatus}`);
    }
 };

 return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Task Status</h2>
      <p>Current Status: {status}</p>
      <button onClick={() => updateStatus('In Progress')} className="bg-yellow-500 text-white p-2 rounded-md mr-2">
        Start
      </button>
      <button onClick={() => updateStatus('Completed')} className="bg-green-500 text-white p-2 rounded-md">
        Complete
      </button>
    </div>
 );
};

export default TaskStatus;
