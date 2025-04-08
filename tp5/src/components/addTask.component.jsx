import React, { useState } from 'react';
import '../assets/style/addtask.css';

const AddTask = ({ setTasksToDo }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(0);

  const addTask = () => {
    const newTask = {
    id: `T${Date.now()}`,
    description: taskDescription,
    duration: taskDuration,
    priority: 1,
    done: false,
    };
    setTasksToDo(prevTasks => [...prevTasks, newTask]);
    setTaskDescription('');
    setTaskDuration(0);
  };

  return (
  <div className="addTask">
    <input type="text" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder="description"/>
  </div>
  );

};

export default AddTask;
