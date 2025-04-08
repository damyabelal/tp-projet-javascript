import React, { useState } from 'react';
import Task from './task.component.jsx';
import '../assets/style/tasklist.css';


const Todo = ({ tasks, setTasksToDo, setTasksDone }) => {
  const [searchText, setSearchText] = useState(''); 

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchText.toLowerCase())
  );
  const sortedTasks = [...filteredTasks].sort((a, b) => b.priority - a.priority);

}

export default Todo;
