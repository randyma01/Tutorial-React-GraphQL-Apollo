import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

import { Client } from './grahpql/apolloClient.js';
import { TaskContainer } from './grahpql/taskContainer.js';
//import { Task } from './grahpql/task.js';
//import { AddTask } from './grahpql/addTask';

//import { TaskContainer } from './TaskContainer';

function App() {
  return (
    <ApolloProvider client={Client}>
      <div className='App-header'>
        <TaskContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
