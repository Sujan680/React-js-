import React, { useState } from 'react'
import '../style.css';
const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='container'>
        <div>
            <h1 className='number'>
                {count}
            </h1>
        </div>

        <div className="btn-container">
            <button className='btn' onClick={() => setCount(count + 1)}>+</button> 
            <button className='btn' onClick={() => setCount(count - 1)}>-</button> 
        </div>
    </div>
  )
}

export default Counter;