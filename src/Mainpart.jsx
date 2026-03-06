import LeftSide from './Component/LeftSide';
import Rightside from './Component/Rightside';


const Mainpart = ({setCount,selectCard,setselectCard,setCounte}) => {
   
    return (
   <div className="p-4">

   
  <div className="flex flex-col md:flex-row gap-6 m-4">

    <div className="md:w-2/3">
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
    </div>

    <div className="md:w-1/3">
      <h1 className="text-2xl font-bold mb-4">Task Status</h1>
    </div>

  </div>

  
  <div className="flex flex-col md:flex-row gap-6">

    <div className="md:w-2/3">
      <LeftSide
        selectCard={selectCard}
        setselectCard={setselectCard}
        setCount={setCount}
      > </LeftSide>
    </div>

    <div className="md:w-1/3">
      <Rightside selectCard={selectCard} setCounte={setCounte} > </Rightside>
    </div>

  </div>

</div>
    );
};

export default Mainpart;
