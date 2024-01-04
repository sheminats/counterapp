import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementbyAmount,increment,decrement,reset } from '../Redux/counterSlice'

function Counter() {
  const dispatch= useDispatch()
  const count=useSelector((state)=>state.counterSlice.count)
  const [amount,setAmount]=useState(0)
  const handleIncrement=()=>{
    if (amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else{
      alert("Enter Valid Amount")
    }
  }
  return (
    
    <div  className=' container   q1'>
<h1 className='fs-2 text-center mt-2 '><b>Counter</b> </h1>
        <h1 className='text-center mt-5 text-primary'>{count}</h1>
        <button onClick={()=>dispatch(decrement())}  type="button" className="btn btn-primary mx-5 my-5">Decrement</button>         <button onClick={()=>dispatch(reset())} type="button" className="btn btn-light">Reset</button>                 <button onClick={()=>dispatch(increment())} type="button" className="btn btn-primary mx-5">Increment</button> 
<div className='d-flex justify-content-between mt-3 w-100'>
        <input onChange={e=>setAmount(e.target.value)} value={amount||""}type="text" className='form-control 'placeholder='Enter amount to be incremented!!!' />
        <button onClick={handleIncrement}  type="button" className="btn btn-primary ms-3">Increment by amount</button>
        </div>
    </div>
  )
} 

export default Counter