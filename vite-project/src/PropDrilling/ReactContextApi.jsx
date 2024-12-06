import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const ReactContextApi = () => {
    const [user, setUser] = useState('Sujan');
  return (
    <div>
        <UserContext.Provider value={user}>
            <h1> {`Hello ${user}`} </h1>
            <Component1/>
        </UserContext.Provider>
    </div>
  )
}

export default ReactContextApi;

const Component1 = () => {
    return(
        <>
            <h1>Component 1</h1>
            <Component2/>
        </>
    )
};

const Component2 = () => {
    return(
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    )
};

const Component3 = () => {
    return(
        <>
            <h1>Component 3</h1>
            <Component4/>
        </>
    )
};
const Component4 = () => {
    const user = useContext(UserContext);
    return(
        <>
            <h1>Component 4</h1>
            <h3> {`Helllo ${user} again!`} </h3>
        </>
    )
};

