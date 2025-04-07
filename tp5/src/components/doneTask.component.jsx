import React from 'react';


const DoneTask = ({ task }) => (
  <div className="task done">
    <div className="info">
      <p>{task.description}</p>
      <p> durée : {task.duration}</p>
    </div>
  </div>
);

export default DoneTask;
