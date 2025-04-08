import React from 'react';
import DoneTask from './doneTask.component.jsx';


const Done = ({ tasks }) => (
  <div className="tasklist done">
    <h3>Tâches terminées </h3>
    {tasks.map(task => (
      <DoneTask key={task.id} task={task} />
    ))}
  </div>
);

export default Done;
