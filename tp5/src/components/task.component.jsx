import React from 'react';
import PriorityScale from './priorityScale.component.jsx';
import DoneButton from './doneButton.component.jsx';
import '../assets/style/task.css';

const Task = ({ task, setTasksToDo, setTasksDone }) => {
  const { id, description, duration, priority, done } = task;

}

export default Task;
