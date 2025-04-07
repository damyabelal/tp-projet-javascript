import React, { useState } from 'react';
import AddTask from './addTask.component.jsx';
import ToDo from './toDo.component.jsx';
import Done from './done.component.jsx';
import tasksData from '../data/tasksData';
import '../assets/style/taskApp.css';

const App = () => {
  const [tasksToDo, setTasksToDo] = useState(tasksData);
  const [tasksDone, setTasksDone] = useState([]);

  
};

export default App;
