import React, { useState } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({task,setCount,selectCard,setselectCard}) => {

     const [isClicked,setIsClicked]=useState(false)

       const handleClick = (data) => {
       
    if (!isClicked) {  
      setIsClicked(true)
      setCount(prev => prev + 1)
      toast("Task is now in progress");
    }
    setselectCard([...selectCard,data])
  }
    return (
      
       (
              <div   onClick={!isClicked ? () => handleClick(task) : null} className="card bg-base-100 w-full shadow-sm">
                
                <div className="card-body">
                  <div className='flex justify-between'>
                      <h2 className="card-title">{task.title}</h2>
                      <button className={`${isClicked ? "bg-yellow-400" : "bg-green-500"} text-black px-4 py-2 rounded`}> {isClicked===true?"In-Progress" :"Open"}
                      </button>


                  </div>
                  <p>{task.description}</p>
                     <div className='justify-between flex'>                          
                                <p> # {task.id}</p>                
                                <p> {task.priority}</p>
                               <p> {task.customer}</p>
                              <p className="flex items-center gap-1">
  <FaRegCalendarAlt size={16} /> {task.createdAt}
</p>
                            
                     </div>
                </div>
                 
              </div>
       )
            
           

       
    );
};

export default Card;