import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Status = ({ data, handleComplete,setCounte }) => {

  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    if (!isCompleted) {
      handleComplete(data.title);  
      setCounte(prev => prev + 1)
      setIsCompleted(true);
       toast("Task is now in Resolved");     
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">

        <h2 className="text-2xl font-bold text-center">
          {data.title}
        </h2>

        <div className="mt-6">
          <button
            onClick={handleClick}
            className={`btn btn-primary btn-block ${isCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isCompleted}  
          >
            {isCompleted ? "Completed" : "Complete"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Status;