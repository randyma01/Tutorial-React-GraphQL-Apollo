import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Task } from './task.js';
import { AddTask } from './addTask.js';
import { GET_TASKS } from './query.js';

const TaskContainer = () => {
  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    //pollInterval: 500,
    //fetchPolicy: 'cache-and-network',
  });

  return (
    <>
      <AddTask refetch={refetch} />
      <Task error={error} loading={loading} data={data} />
    </>
  );
};

export { TaskContainer };
