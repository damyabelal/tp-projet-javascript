import React from 'react';
import '../assets/style/priorityLevel.css';

const PriorityLevel = ({ level, priority, setPriority }) => {
  const click = () => setPriority(level);

  return (
    <div
      className={`level ${priority >= level ? 'on' : 'off'}`}
      onClick={click}
    ></div>
  );
};

export default PriorityLevel;
