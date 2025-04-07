import React from 'react';
import PriorityLevel from './priorityLevel.component.jsx';
import '../assets/style/priorityScale.css';

const PriorityScale = ({ priority, setPriority }) => {
  return (
    <div className="scale">
      {[1, 2, 3, 4, 5, 6].map(level => (
        <PriorityLevel key={level} level={level} priority={priority} setPriority={setPriority} />
      ))}
    </div>
  );
};

export default PriorityScale;
