import React from 'react';
//import { useQuery } from '@apollo/react-hooks';

//import { GET_TASK, GET_TASKS } from './query.js';

const Task = ({ loading, error, data }) => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.fetchTasks.map((task) => (
        <li>{task.task}</li>
      ))}
    </ul>
  );
};

export { Task };
