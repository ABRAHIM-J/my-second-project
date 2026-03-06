
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Mainpart from './Mainpart'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count,setCount]=useState(0)
   const [counte,setCounte]=useState(0)
   const [selectCard, setselectCard] = useState([]);
       
  

  return (
    <>
       <Navbar></Navbar>
       <Banner  counte={counte}  count={count}></Banner>
        <Mainpart  setCounte={setCounte}   setCount={setCount} selectCard={selectCard} setselectCard={setselectCard} ></Mainpart>
       <Footer></Footer>
       <ToastContainer />
    </>
  )
}

export default App

