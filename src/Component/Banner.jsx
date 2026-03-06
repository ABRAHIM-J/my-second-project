import React from 'react';
import banner from "../assets/vector1.png"
const Banner = ({count,counte}) => {
    return (
        <div className="p-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
    
    {/* Card 1 */}
    <div
          className="flex rounded-xl p-6 h-40 justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner}), linear-gradient(to right, #632EE3, #4F46E5)`,
          }}
        >
       
      <p className="text-white mr-4">
       In-Progress
      </p>
       <span className='text-4xl text-white'>{count}</span>
    </div>

    {/* Card 2 */}
    <div
          className="flex rounded-xl p-6 h-40 justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner}), linear-gradient(to right, #034e25, #69c985)`,
          }}
        >
     
      <p className="text-white mr-4 ">
       Resolved
      </p>
       <span className='text-4xl text-white'> {counte} </span>
    </div>

  </div>
</div>
    );
};

export default Banner;