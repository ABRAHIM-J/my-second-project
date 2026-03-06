import React, { useState, useEffect } from 'react';
import Card from './Card';


function LeftSide({setCount,selectCard,setselectCard}) {
 
  const [tasks, setTasks] = useState([]);

   
  useEffect(() => {
    fetch('/Main.json')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
               
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map(task => <Card setCount={setCount} selectCard={selectCard} setselectCard={setselectCard} task={task}></Card>)}
          </div>
       
     
    </div>
  );
}

export default LeftSide;
