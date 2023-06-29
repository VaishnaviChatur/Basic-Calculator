import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[num1,setNum1] =useState()
  const[num2,setNum2] =useState()
  const[total,setTotal] =useState('')
  function handleAdd(){
    setTotal(parseInt(num1)+parseInt(num2))
  }
  function handleSub(){
    setTotal(num1-num2)
   }
   function handleMul(){
    setTotal(num1*num2)
   }
   function handleDiv(){
    setTotal(num1/num2)
   }
  return (
    <>
       <h1 className='head'>Calulator</h1>
    <div className='container'>
   
      {/* <p>here you can perform operation Add/sub/duvision/multi</p> */}
      <input  className='inputbox' type='number' value={num1} onChange={e=>setNum1(e.target.value)}/>&nbsp;
      <input className='inputbox' type='number' value={num2} onChange={e=>setNum2(e.target.value)}/>
      <div className='gapp'>
     <button className='btn' onClick={handleAdd}>Addition</button>
     <button className='btn' onClick={handleSub}>subtraction</button>
     <button className='btn' onClick={handleMul}>Multiplication</button>
     <button className='btn' onClick={handleDiv}>Division</button>
     </div>
     <h1 className='result'>Total is {total}</h1>
    </div>
    </>
  );
}
