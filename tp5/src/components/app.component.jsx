import React, { useEffect, useState } from 'react';
import AddTask from './addTask.component.jsx';
import ToDo from './toDo.component.jsx';
import Done from './done.component.jsx';
import tasksData from '../data/tasksData';
import '../assets/style/taskApp.css';

const App = () => {
  const [tasksToDo, setTasksToDo] = useState(tasksData);
  const [tasksDone, setTasksDone] = useState([]);

  const asDone = (taskId) => {
    const taskToMark = tasksToDo.find(task => task.id === taskId);
    taskToMark.done = true;
    setTasksToDo(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setTasksDone(prevTasks => [...prevTasks, taskToMark]);
  };

  useEffect(() => {
    const tasksPriority = tasksData.map(task => ({...task, priority: task.priority || 1}));   
    setTasksToDo(tasksPriority);
  }, []);  

  return (
    <div className="taskApp">
      <h1>Gestion des tâches</h1>
      <AddTask tasks={tasksToDo} setTasksToDo={setTasksToDo} />
      <ToDo tasks={tasksToDo} setTasksToDo={setTasksToDo} setTasksDone={setTasksDone} markAsDone={asDone}/>
      <Done tasks={tasksDone} />
    </div>
  );

};

export default App;
