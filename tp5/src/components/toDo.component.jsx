import React, { useState } from 'react';
import Task from './task.component.jsx';
import '../assets/style/tasklist.css';
import Sum from './sum.component.jsx';


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
      <div className="info">
        Il y'a {filteredTasks.length} tâches en cours. Pour une durée de : {filteredTasks.reduce((acc, task) => acc + Number(task.duration), 0)} mn
      </div>

      {sortedTasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          setTasksToDo={setTasksToDo} 
          setTasksDone={setTasksDone} 
        />
      ))}
    </div>
);

}

export default Todo;
