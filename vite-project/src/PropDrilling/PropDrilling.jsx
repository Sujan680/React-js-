

import React, { useState } from 'react'

const PropDrilling = () => {
    const [user, setUser] = useState('Sujan');
  return (
    <div>
        <Parent user={user}/>
    </div>
  )
}

export default PropDrilling;

const Parent = ({user}) => {
    return <Child user={user}/>
};

const Child = ({user}) => {
    return <GrandChild user={user}/>
};

const GrandChild = ({user}) => {
    return(
        <h1>
            Welcome, {user} Magar to the prop drilling examples!
        </h1>
    )
};