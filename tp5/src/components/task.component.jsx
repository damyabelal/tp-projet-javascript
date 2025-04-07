import React from 'react';
import PriorityScale from './priorityScale.component.jsx';
import DoneButton from './doneButton.component.jsx';
import '../assets/style/task.css';

const Task = ({ task, setTasksToDo, setTasksDone }) => {
  const { id, description, duration, priority, done } = task;

  const priorityChange = newPriority => {
    task.priority = newPriority;
    setTasksToDo(prevTasks => [...prevTasks]);
  };

  const markIsDone = () => {
    task.done = true;
    setTasksToDo(prevTasks => prevTasks.filter(t => t.id !== id));
    setTasksDone(prevTasks => [...prevTasks, task]);
  };

  return (
    <div className={`task ${done ? 'done' : ''}`}>
      <div className="info">
        <p>{description}</p>
        <p> durée: {duration}</p>
        </div>
      <PriorityScale priority={priority} setPriority={priorityChange} />
      {!done && <DoneButton onClick={markIsDone} />}
    </div>
  );
};

export default Task;
