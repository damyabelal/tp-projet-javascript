import React from 'react';
import '../assets/style/doneButton.css';

const DoneButton = ({ click }) => (
  <div className="doneButton" onClick={click}>
     ✔
  </div>
);

export default DoneButton;
