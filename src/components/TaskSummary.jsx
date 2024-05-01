/* eslint-disable react/prop-types */

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const TaskSummary = ({ tasks }) => {
  
   const summaryData = tasks.reduce((acc, task) => {
      acc.completed += task.status === 'completed' ? 1 : 0;
      acc.inProgress += task.status === 'inProgress' ? 1 : 0;
      acc.notStarted += task.status === 'notStarted' ? 1 : 0;
      return acc;
    }, { completed: 0, inProgress: 0, notStarted: 0 });
    

  return (
    <BarChart width={500} height={300} data={[{ name: 'Completed', value: summaryData.completed }, { name: 'In Progress', value: summaryData.inProgress }, { name: 'Not Started', value: summaryData.notStarted }]}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default TaskSummary;