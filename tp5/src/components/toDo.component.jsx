import React, { useState } from 'react';
import Task from './task.component.jsx';
import '../assets/style/tasklist.css';


const Todo = ({ tasks, setTasksToDo, setTasksDone }) => {
  const [searchText, setSearchText] = useState(''); 

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchText.toLowerCase())
  );
  const sortedTasks = [...filteredTasks].sort((a, b) => b.priority - a.priority);
  const search = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="tasklist">
      <h3>Tâches en cours</h3>
      <div className="filter"><input type="text" placeholder="filtrer" value={searchText} onChange={search}/></div>
    </div>
);

}

export default Todo;
