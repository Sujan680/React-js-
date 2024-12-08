import React, { useEffect, useState } from 'react'

const Challenge2 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
       console.log(`Counter increases ${counter} times`);
    }, [counter]);
  return (
    <div>
        <h2> Counter changes: {counter} </h2>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  )
}

export default Challenge2