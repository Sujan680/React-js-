import React, { useState } from 'react'

const FavouriteColor = () => {
    const [color, setColor] = useState('red')
  return (
    <div>
        <h2>{color}</h2>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('blue')}>Blue</button>
    </div>
  )
}

export default FavouriteColor;