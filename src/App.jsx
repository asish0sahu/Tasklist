import {useState} from 'react';
import TaskList from './components/TaskList';
import TaskAssignmentModel from './components/TaskAssignment';
import TaskStatus from './components/TaskStatus';
import TaskSummary from './components/TaskSummary';

function App() {
 const [tasks, setTasks] = useState([]);

 return (
    <div className="App text-center">
      <TaskList setTasks={setTasks} />
      <TaskAssignmentModel task={tasks[0]} />
      <TaskStatus task={tasks[0]} />
      <TaskSummary tasks={tasks} />
    </div>
 );
}

export default App;