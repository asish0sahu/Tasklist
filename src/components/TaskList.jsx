
import { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

 
  const validateTask = (task) => {
    
    if (task.trim().length < 3) {
      return false;
    }
    return true;
  };

  const addTask = () => {
    if (!validateTask(newTask)) {
      setError('Task must be at least 3 characters long.');
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask('');
    setError(''); 
  };

  return (
    <div className="p-4">
      <h1 className='font-bold sans-serif mb-3'>Task List App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-md"
        placeholder="Add a new task"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded-md ml-2">
        Add Task
      </button>
      <ul className="list-disc mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
