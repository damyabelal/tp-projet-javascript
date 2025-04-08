import React, { useState } from 'react';
import Task from './task.component.jsx';
import '../assets/style/tasklist.css';


const Todo = ({ tasks, setTasksToDo, setTasksDone }) => {
  const [searchText, setSearchText] = useState(''); 

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default Todo;
