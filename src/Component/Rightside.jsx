import React, { useState } from 'react';
import Status from './Status';

const Rightside = ({ selectCard,setCounte}) => {
      const [resolved, setResolved] = useState([]);
     const handleComplete = (title) => {
     setResolved([...resolved, title]);
  };
  return (
    <>
      {selectCard.map((data, index) => (
        <Status key={index} data={data} handleComplete={handleComplete} setCounte={setCounte} > </Status>
      ))}

      <h1 className='text-2xl font-bold'>Resolved Task</h1>
          {
        resolved.map((title, index) => (
          <p key={index} className="bg-green-200 p-2 mt-2 rounded">
            {title}
          </p>
        ))
      }
    </>
  );
};

export default Rightside;